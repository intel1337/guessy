

'use server';

import { Ratelimit } from "@upstash/ratelimit";
import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';




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
  const email = formData.get("email");
  const password = formData.get("password");
  

  if (!email || !password) {
    return NextResponse.json({ status: "Email or Password is missing" });
  }

  try {
    const headers = {
      "Content-Type": "application/json",
      "x-internal-secret": process.env.SERVER_KEY,
    };

    const usersRes = await fetch(
      "https://guessy-rho.vercel.app/api/database/getusers",
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
          return NextResponse.json({ status: "Valid"
           });
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
