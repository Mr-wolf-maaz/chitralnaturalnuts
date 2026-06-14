import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const { name, email, phone, subject, message } = data;
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  // In production: save to DB, send notification email
  console.log("New contact message:", { name, email, subject });
  return NextResponse.json({ success: true, message: "Message received! We'll reply within 24 hours." });
}
