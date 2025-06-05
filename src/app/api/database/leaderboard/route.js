import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

export async function GET(req) {
 
  
  try {
    // get top 100 use
    const leaderboard = await prisma.user.findMany({
      select: {
        username: true,
        score: true,
        name: true
      },
      orderBy: {
        score: 'desc'
      },
      take: 100,
      where: {
        score: {
          gt: 0 //only include users with qscores > 0
        }
      }
    });

    return NextResponse.json(leaderboard);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req) {

  
  try {
    const { username, score } = await req.json();

    if (!username || score === undefined) {
      return NextResponse.json({ error: 'Username and score are required' }, { status: 400 });
    }


    const user = await prisma.user.findUnique({
      where: { username: username }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }


    if (score > user.score) {
      const updatedUser = await prisma.user.update({
        where: { username: username },
        data: { score: score }
      });

      return NextResponse.json({ 
        message: 'Score updated successfully', 
        data: {
          username: updatedUser.username,
          newScore: updatedUser.score,
          previousScore: user.score
        }
      });
    } else {
      return NextResponse.json({ 
        message: 'Score not updated - current score is higher or equal',
        currentScore: user.score,
        submittedScore: score
      });
    }

  } catch (error) {
    console.error('Error updating score:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}