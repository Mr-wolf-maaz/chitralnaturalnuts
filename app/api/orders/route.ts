import { NextResponse } from "next/server";
import { generateOrderNumber } from "@/lib/utils";

export async function POST(request: Request) {
  const { items, shippingAddress, paymentMethod, total } = await request.json();
  if (!items?.length || !shippingAddress || !paymentMethod) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  const orderNumber = generateOrderNumber();
  // In production: save to DB, send confirmation email/SMS
  return NextResponse.json({ success: true, orderNumber, message: "Order placed successfully!" });
}
