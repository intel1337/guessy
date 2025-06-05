import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import jwt from 'jsonwebtoken';

const SECRETKEY = process.env.SECRET_TOKEN_KEY;

export async function GET(req) {
  try {

    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ 
        status: "error", 
        message: "Please login first" 
      }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    try {
      jwt.verify(token, SECRETKEY);
    } catch (err) {
      return NextResponse.json({ 
        status: "error", 
        message: "Invalid login token" 
      }, { status: 401 });
    }


    const difficulty = req.nextUrl.searchParams.get("difficulty") || "medium";
    const validDifficulties = ["easy", "medium", "hard", "impossible"];
    
    if (!validDifficulties.includes(difficulty)) {
      return NextResponse.json({ 
        status: "error", 
        message: `Difficulty must be: ${validDifficulties.join(', ')}` 
      }, { status: 400 });
    }


    

    const totalWords = await prisma.mots.count({
      where: { difficulty: difficulty }
    });
    

    

    if (totalWords === 0) {
      const fallbackDifficulties = ["medium", "easy"];
      
      for (const fallbackDifficulty of fallbackDifficulties) {
        if (fallbackDifficulty === difficulty) continue;
        
        const fallbackCount = await prisma.mots.count({
          where: { difficulty: fallbackDifficulty }
        });
        
        if (fallbackCount > 0) {

          const randomSkip = Math.floor(Math.random() * fallbackCount);
          const wordData = await prisma.mots.findFirst({
            where: { difficulty: fallbackDifficulty },
            skip: randomSkip,
          });
          
          if (wordData) {
            const word = wordData.word.toLowerCase().trim();
            return NextResponse.json({
              status: "success",
              data: {
                word,
                length: word.length,
                difficulty: fallbackDifficulty,
                requestedDifficulty: difficulty,
                fallback: true
              }
            });
          }
        }
      }
      
      return NextResponse.json({ 
        status: "error", 
        message: `No words found for ${difficulty} difficulty` 
      }, { status: 404 });
    }

    // Step 6: Get a random word
    const randomSkip = Math.floor(Math.random() * totalWords);
    const wordData = await prisma.mots.findFirst({
      where: { difficulty: difficulty },
      skip: randomSkip,
    });

    if (!wordData) {
      return NextResponse.json({ 
        status: "error", 
        message: "Could not find word" 
      }, { status: 404 });
    }

    // Step 7: Clean and validate the word
    const word = wordData.word.toLowerCase().trim();
    

    
    if (!word || word.length < 3 || word.length > 12) {
      return NextResponse.json({ 
        status: "error", 
        message: `Word length not valid: ${word.length}` 
      }, { status: 400 });
    }

    // Step 8: Return the word
    return NextResponse.json({
      status: "success",
      data: {
        word,
        length: word.length,
        difficulty: wordData.difficulty,
      }
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { status: "error", message: "Something went wrong" },
      { status: 500 }
    );
  }
}