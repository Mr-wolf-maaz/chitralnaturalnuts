"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Minus, Plus, Trash2, Tag, ArrowRight, Truck } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { items, updateQuantity, removeItem, total } = useCartStore();
  const cartTotal = useCartStore((s) => s.total());
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const FREE_SHIPPING_MIN = 2000;
  const shipping = cartTotal >= FREE_SHIPPING_MIN ? 0 : 200;
  const discount = couponApplied ? Math.round(cartTotal * 0.1) : 0;
  const grandTotal = cartTotal + shipping - discount;

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <div className="bg-[#1B4332] text-white py-12">
        <div className="container-custom">
          <nav className="text-xs text-white/50 mb-3">
            <Link href="/" className="hover:text-[#D4AF37]">Home</Link> /{" "}
            <span className="text-white/80">Shopping Cart</span>
          </nav>
          <h1 className="font-display text-4xl font-bold">Shopping Cart</h1>
        </div>
      </div>

      <div className="container-custom py-8">
        {items.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-sm border border-gray-100">
            <ShoppingBag className="w-20 h-20 text-gray-200 mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-400 mb-6">Looks like you haven't added anything yet.</p>
            <Link href="/shop">
              <Button variant="primary" size="lg">Browse Products</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-3">
              {/* Free shipping bar */}
              {cartTotal < FREE_SHIPPING_MIN && (
                <div className="bg-[#1B4332]/5 border border-[#1B4332]/20 rounded-sm p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm text-[#1B4332] font-medium">
                      <Truck className="w-4 h-4" />
                      Add{" "}
                      <strong>{formatPrice(FREE_SHIPPING_MIN - cartTotal)}</strong>{" "}
                      more for free shipping!
                    </div>
                    <span className="text-xs text-gray-400">
                      {Math.round((cartTotal / FREE_SHIPPING_MIN) * 100)}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#1B4332] rounded-full transition-all"
                      style={{
                        width: `${Math.min((cartTotal / FREE_SHIPPING_MIN) * 100, 100)}%`,
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Cart items */}
              <div className="bg-white rounded-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-50 flex items-center justify-between">
                  <h2 className="font-serif font-semibold text-[#1B4332]">
                    {items.length} Item{items.length !== 1 ? "s" : ""}
                  </h2>
                  <Link href="/shop" className="text-xs text-[#1B4332] hover:underline">
                    + Continue Shopping
                  </Link>
                </div>
                <div className="divide-y divide-gray-50">
                  {items.map((item) => (
                    <div key={item.id} className="p-5 flex gap-5 items-start">
                      <div className="w-20 h-20 bg-[#F0EDE6] rounded-sm flex items-center justify-center text-3xl flex-shrink-0">
                        🥜
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link href={`/products/${item.slug}`}>
                          <h3 className="font-serif font-semibold text-gray-800 hover:text-[#1B4332] transition-colors">
                            {item.name}
                          </h3>
                        </Link>
                        {item.variant && (
                          <p className="text-xs text-gray-400 mt-0.5">{item.variant}</p>
                        )}
                        <p className="text-[#1B4332] font-bold mt-1">
                          {formatPrice(item.price)}
                        </p>
                        <div className="flex items-center gap-4 mt-3">
                          <div className="flex items-center border border-gray-200 rounded-sm">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-gray-500"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-gray-500"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="text-sm font-bold text-gray-700">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-300 hover:text-red-400 transition-colors p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-4">
              {/* Coupon */}
              <div className="bg-white rounded-sm border border-gray-100 p-5">
                <h3 className="font-serif font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-[#D4AF37]" /> Coupon Code
                </h3>
                {couponApplied ? (
                  <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-sm p-3">
                    <span className="text-green-700 text-sm font-medium">✓ SAVE10 applied — 10% off!</span>
                    <button
                      onClick={() => setCouponApplied(false)}
                      className="text-xs text-gray-400 hover:text-red-400"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                      placeholder="Enter code"
                      className="flex-1 border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-[#1B4332]"
                    />
                    <button
                      onClick={() => {
                        if (coupon === "SAVE10") setCouponApplied(true);
                      }}
                      className="px-4 py-2 bg-[#1B4332] text-white rounded-sm text-sm font-medium hover:bg-[#2D6A4F] transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                )}
                <p className="text-xs text-gray-400 mt-2">Try: SAVE10 for 10% off</p>
              </div>

              {/* Order summary */}
              <div className="bg-white rounded-sm border border-gray-100 p-5">
                <h3 className="font-serif font-semibold text-[#1B4332] mb-5">Order Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>{formatPrice(cartTotal)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (10%)</span>
                      <span>-{formatPrice(discount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>
                      {shipping === 0 ? "FREE" : formatPrice(shipping)}
                    </span>
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-base">
                    <span className="text-gray-800">Total</span>
                    <span className="text-[#1B4332] font-display text-xl">
                      {formatPrice(grandTotal)}
                    </span>
                  </div>
                </div>

                <Link href="/checkout" className="block mt-5">
                  <Button variant="gold" size="lg" className="w-full">
                    Proceed to Checkout <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                {/* Payment icons */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 text-center mb-2">Secure Payments</p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {["COD", "Easypaisa", "JazzCash", "Stripe", "Bank"].map((pm) => (
                      <span key={pm} className="text-[10px] px-2 py-1 bg-gray-100 text-gray-500 rounded-sm">
                        {pm}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
