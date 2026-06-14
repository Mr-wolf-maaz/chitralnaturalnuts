"use client";
import React from "react";
import Link from "next/link";
import { X, ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, total } = useCartStore();
  const cartTotal = useCartStore((s) => s.total());
  const FREE_SHIPPING_MIN = 2000;
  const remaining = FREE_SHIPPING_MIN - cartTotal;

  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={closeCart} />
      <div className="cart-drawer flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#1B4332]" />
            <h2 className="font-serif font-semibold text-lg text-[#1B4332]">Your Cart</h2>
            {items.length > 0 && (
              <span className="w-6 h-6 bg-[#1B4332] text-white text-xs font-bold rounded-full flex items-center justify-center">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </div>
          <button onClick={closeCart} className="p-2 hover:bg-gray-100 rounded-sm transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Free shipping progress */}
        {cartTotal > 0 && (
          <div className="px-5 py-3 bg-[#FAF9F6] border-b border-gray-100">
            {remaining > 0 ? (
              <p className="text-xs text-gray-600">
                Add <span className="font-semibold text-[#1B4332]">{formatPrice(remaining)}</span> more for <span className="font-semibold text-[#1B4332]">FREE shipping!</span>
              </p>
            ) : (
              <p className="text-xs text-[#1B4332] font-semibold">🎉 You qualify for FREE shipping!</p>
            )}
            <div className="mt-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#1B4332] rounded-full transition-all duration-500"
                style={{ width: `${Math.min((cartTotal / FREE_SHIPPING_MIN) * 100, 100)}%` }} />
            </div>
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full py-16 gap-4">
              <ShoppingBag className="w-16 h-16 text-gray-200" />
              <div className="text-center">
                <p className="font-serif text-lg text-gray-700 mb-1">Your cart is empty</p>
                <p className="text-sm text-gray-400">Add some premium nuts to get started!</p>
              </div>
              <Button variant="primary" onClick={closeCart} className="mt-2" size="sm">
                <Link href="/shop">Browse Products</Link>
              </Button>
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {items.map((item) => (
                <div key={item.id} className="p-4 flex gap-4 hover:bg-gray-50/50 transition-colors">
                  <div className="w-16 h-16 bg-[#F0EDE6] rounded-sm flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#FAF9F6] to-[#D4AF37]/20 flex items-center justify-center text-2xl">🥜</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-gray-800 line-clamp-1">{item.name}</p>
                    {item.variant && <p className="text-xs text-gray-400 mt-0.5">{item.variant}</p>}
                    <p className="text-[#1B4332] font-semibold text-sm mt-1">{formatPrice(item.price)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-gray-200 rounded-sm">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 text-gray-500 transition-colors">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 text-gray-500 transition-colors">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-xs text-gray-400 ml-auto">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="p-1.5 text-gray-300 hover:text-red-400 transition-colors self-start mt-1">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 p-5 space-y-3 bg-white">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Subtotal</span>
              <span className="font-serif font-semibold text-[#1B4332] text-lg">{formatPrice(cartTotal)}</span>
            </div>
            <p className="text-xs text-gray-400">Shipping calculated at checkout</p>
            <Link href="/checkout" onClick={closeCart}>
              <Button variant="gold" className="w-full" size="lg">Proceed to Checkout →</Button>
            </Link>
            <Link href="/cart" onClick={closeCart}>
              <Button variant="outline" className="w-full" size="sm">View Full Cart</Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
