import { NextResponse } from "next/server";

const COUPONS: Record<string, { type: string; value: number; min: number }> = {
  SAVE10: { type: "percentage", value: 10, min: 1000 },
  WELCOME15: { type: "percentage", value: 15, min: 1500 },
  FLAT200: { type: "fixed", value: 200, min: 2000 },
  FREESHIP: { type: "free_shipping", value: 100, min: 500 },
};

export async function POST(request: Request) {
  const { code, cartTotal } = await request.json();
  const coupon = COUPONS[code?.toUpperCase()];
  if (!coupon) {
    return NextResponse.json({ error: "Invalid coupon code" }, { status: 400 });
  }
  if (cartTotal < coupon.min) {
    return NextResponse.json({ error: `Minimum order Rs. ${coupon.min} required` }, { status: 400 });
  }
  const discount = coupon.type === "percentage" ? Math.round(cartTotal * coupon.value / 100) : coupon.value;
  return NextResponse.json({ success: true, discount, type: coupon.type, message: `Coupon applied! You save Rs. ${discount.toLocaleString()}` });
}
