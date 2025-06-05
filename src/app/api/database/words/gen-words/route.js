import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(req) {
  const secretKey = process.env.SERVER_KEY;
  const requestKey = req.headers.get('x-internal-secret');

  if (requestKey !== secretKey) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {

    const response = await fetch("https://trouve-mot.fr/api/random/1000");
    const words = await response.json();
    

    
    const formattedWords = words.map((wordData) => {
      const word = typeof wordData === 'string' ? wordData : wordData.name;
      const longueur = word.length;
      

      let difficulty;
      if (longueur === 5) {

        const rand = Math.random();
        if (rand < 0.3) difficulty = "easy";
        else if (rand < 0.6) difficulty = "medium";
        else if (rand < 0.85) difficulty = "hard";
        else difficulty = "impossible";
      } else {

        difficulty =
          longueur <= 4 ? "easy" :
          longueur <= 6 ? "medium" :
          longueur <= 8 ? "hard" : "impossible";
      }

      return {
        word: word.toLowerCase(),
        longueur,
        difficulty,
      };
    });

    // Filter to only include words that don't already exist
    const existingWords = await prisma.mots.findMany({
      select: { word: true }
    });
    // ALGO TEMP CHANGER
    const existingWordSet = new Set(existingWords.map(w => w.word.toLowerCase()));
    
    const newWords = formattedWords.filter(w => !existingWordSet.has(w.word));
    


    if (newWords.length > 0) {
      await prisma.mots.createMany({
        data: newWords,
        skipDuplicates: true,
      });
    }


    const fiveLetterStats = await prisma.mots.groupBy({
      by: ['difficulty'],
      where: { longueur: 5 },
      _count: { difficulty: true }
    });

    return NextResponse.json({ 
      status: "ok", 
      inserted: newWords.length,
      fiveLetterWordsByDifficulty: fiveLetterStats
    });
  } catch (error) {
    console.error('Gen-words error:', error);
    return NextResponse.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }
}