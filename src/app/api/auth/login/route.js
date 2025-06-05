'use server';

import { Ratelimit } from "@upstash/ratelimit";
import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
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


  let jwtToken = null;
  let email = null;
  let password = null;
  let formData = null;
  let isForm = false;
  try {
    formData = await req.formData();
    isForm = true;
    jwtToken = formData.get('jwt');
    email = formData.get('email');
    password = formData.get('password');
  } catch (e) {
    console.error("Failed to parse form data")
    return NextResponse.json({ status: "Failed to parse form data" }, { status: 400 });
  
  }

  if (jwtToken) {
    // JWT Auth
    try {
      const decoded = jwt.verify(jwtToken, SECRETKEY);
      return NextResponse.json({ status: "jwt valid", user: decoded });
    } catch (err) {
      return NextResponse.json({ status: "jwt invalid" }, { status: 401 });
    }
  }

  if (!email || !password) {
    return NextResponse.json({ status: "Email or Password is missing" });
  }

  try {
    const headers = {
      "Content-Type": "application/json",
      "x-internal-secret": process.env.SERVER_KEY,
    };
    const usersRes = await fetch(
      "http://localhost:3000/api/database/getusers",
      {
        method: "GET",
        headers,
      }
    );
    if (!usersRes.ok) {
      return NextResponse.json({ status: "Failed to fetch users" }, { status: 500 });
    }
    const users = await usersRes.json();
    for (const user of users) {
      if (user.email === email) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {

          const token = jwt.sign(
            { 
              id: user.id,
              username: user.username
            },
            SECRETKEY,
            { expiresIn: '7d' }
          );
          return NextResponse.json({ status: "Valid", token });
        } else {
          return NextResponse.json({ status: "Not Valid" });
        }
      }
    }
    return NextResponse.json({ status: "401 - user not found" });
  } catch (err) {
    return NextResponse.json({ status: "401 - Error fetching users or processing request" });
  }
}
