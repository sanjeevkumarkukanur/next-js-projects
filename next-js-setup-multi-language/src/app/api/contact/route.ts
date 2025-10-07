import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  // Here you can integrate sending email or saving to a database

  return NextResponse.json({ message: 'Thank you for contacting us!' });
}
