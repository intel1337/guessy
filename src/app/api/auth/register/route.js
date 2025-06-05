'use server'

import { Ratelimit } from "@upstash/ratelimit";
import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from "../../lib/prisma";
import jwt from 'jsonwebtoken';


const SECRETKEY = process.env.SECRET_TOKEN_KEY;



const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(5, "30 s"), 
});

export async function POST(req) {
    const ip = req.headers.get('x-forwarded-for') ?? 'anonymous';
    
    const { success, remaining, reset } = await ratelimit.limit(ip);
    
    if (!success) {
        return NextResponse.json(
          { status: "429 - Too many requests", remaining, reset },
        );
    }

    const formData = await req.formData();
    const email = formData.get('email');
    const username = formData.get('username');
    const password = formData.get('password');
    const numero = parseInt(formData.get('numero'))


    if (!email || !password || !username) {
        return NextResponse.json({ status: "Missing Fields" });
    }

    try {
        const headers = {
            'Content-Type': 'application/json',
            'x-internal-secret': process.env.SERVER_KEY,
        };

        const usersRes = await fetch('http://localhost:3000/api/database/getusers', {
            method: 'GET',
            headers: headers,
        });

        if (!usersRes.ok) {
            return NextResponse.json({ status: "Failed to fetch users" }, { status: 500 });
        }


        const users = await usersRes.json();


        const existingUser = users.find(user => user.email === email || user.username === username);
        if (existingUser) {
            if (existingUser.email === email) {
                return NextResponse.json({ status: "User already has an account" });
            }
            if (existingUser.username === username) {
                return NextResponse.json({ status: "User already has this username" });
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            email,
            username,
            password: hashedPassword,
            numero: numero,
        };
        const createdUser = await prisma.user.create({ data: newUser });
        const token = jwt.sign(
            { 
              id: createdUser.id,
              username: createdUser.username
            },
            SECRETKEY,
            { expiresIn: '7d' }
        );
        return NextResponse.json({
            status: "Successfully created user",
            token: token
        });

    } catch (err) {
        console.error(err)
        return NextResponse.json({ status: "401 - Error fetching users or processing request" });
    }
}
