import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
    const { password } = await req.json();
    console.log("Received password:", password);
    console.log("Env password:", process.env.BIODATA_PASSWORD); // debug
  
    if (password === process.env.BIODATA_PASSWORD) {
      const response = NextResponse.json({ success: true });
      response.cookies.set('biodata_access', password, {
        httpOnly: true,
        maxAge: 60 * 60,
      });
      return response;
    }
  
    return new NextResponse("Unauthorized", { status: 401 });
  }
  