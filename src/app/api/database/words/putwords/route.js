import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
  try {
    const response = await fetch("https://trouve-mot.fr/api/random/500");
    const words = await response.json();
    const formattedWords = words.map((wordData) => {
      const word = typeof wordData === 'string' ? wordData : wordData.name;
      const longueur = word.length;
      const difficulty =
        longueur <= 4 ? "easy" :
        longueur <= 6 ? "medium" :
        longueur <= 8 ? "hard" : "impossible";

      return {
        word,
        longueur,
        difficulty,
      };
    });

    await prisma.mots.createMany({
      data: formattedWords,
      skipDuplicates: true,
    });

    return NextResponse.json({ status: "ok", inserted: formattedWords.length });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }
}