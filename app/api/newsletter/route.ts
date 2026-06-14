import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  // In production: save to DB, send welcome email
  return NextResponse.json({ success: true, message: "Subscribed successfully!" });
}
