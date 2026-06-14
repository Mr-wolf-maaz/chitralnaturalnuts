"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Shield, Truck, CheckCircle, CreditCard, Phone, Building, Package } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { formatPrice, generateOrderNumber } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const PAYMENT_METHODS = [
  { id: "cod", label: "Cash on Delivery", icon: <Package className="w-5 h-5" />, desc: "Pay when your order arrives" },
  { id: "easypaisa", label: "Easypaisa", icon: <Phone className="w-5 h-5" />, desc: "Mobile wallet payment" },
  { id: "jazzcash", label: "JazzCash", icon: <Phone className="w-5 h-5" />, desc: "Mobile wallet payment" },
  { id: "stripe", label: "Credit / Debit Card", icon: <CreditCard className="w-5 h-5" />, desc: "Visa, Mastercard via Stripe" },
  { id: "bank", label: "Bank Transfer", icon: <Building className="w-5 h-5" />, desc: "Direct bank transfer" },
];

export default function CheckoutPage() {
  const { items, total, clearCart } = useCartStore();
  const cartTotal = useCartStore((s) => s.total());
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [ordered, setOrdered] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "", city: "", province: "", notes: "",
  });
  const shipping = cartTotal >= 2000 ? 0 : 200;
  const grandTotal = cartTotal + shipping;

  const handlePlaceOrder = () => {
    const num = generateOrderNumber();
    setOrderNumber(num);
    setOrdered(true);
    clearCart();
  };

  if (ordered) return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center py-16">
      <div className="bg-white rounded-sm border border-gray-100 p-10 max-w-lg w-full mx-4 text-center shadow-xl">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h2 className="font-display text-3xl font-bold text-[#1B4332] mb-2">Order Confirmed! 🎉</h2>
        <p className="text-gray-500 mb-5">Thank you for your order! We'll process it and send a confirmation to your email/WhatsApp.</p>
        <div className="bg-[#FAF9F6] rounded-sm p-4 mb-6">
          <p className="text-xs text-gray-500 mb-1">Order Number</p>
          <p className="font-display text-2xl font-bold text-[#1B4332]">{orderNumber}</p>
          <p className="text-xs text-gray-400 mt-1">Save this for tracking your order</p>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center mb-6">
          {[
            { icon: "📦", label: "Processing", desc: "24 hours" },
            { icon: "🚚", label: "Shipped", desc: "1-2 days" },
            { icon: "🏠", label: "Delivered", desc: "3-5 days" },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-gray-100 rounded-sm p-3">
              <div className="text-2xl mb-1">{s.icon}</div>
              <p className="text-xs font-semibold text-gray-700">{s.label}</p>
              <p className="text-[10px] text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
        <Link href="/shop">
          <Button variant="primary" size="lg" className="w-full">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <div className="bg-[#1B4332] text-white py-10">
        <div className="container-custom">
          <h1 className="font-display text-4xl font-bold mb-4">Checkout</h1>
          {/* Steps */}
          <div className="flex items-center gap-3">
            {[
              { num: 1, label: "Shipping" },
              { num: 2, label: "Payment" },
              { num: 3, label: "Review" },
            ].map((s, i) => (
              <React.Fragment key={s.num}>
                <div className={`flex items-center gap-2 ${step >= s.num ? "text-[#D4AF37]" : "text-white/40"}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 ${step >= s.num ? "border-[#D4AF37] bg-[#D4AF37] text-[#0D2818]" : "border-white/30"}`}>
                    {step > s.num ? "✓" : s.num}
                  </div>
                  <span className="text-sm font-medium hidden sm:block">{s.label}</span>
                </div>
                {i < 2 && <div className={`flex-1 h-px max-w-12 ${step > s.num ? "bg-[#D4AF37]" : "bg-white/20"}`} />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="bg-white rounded-sm border border-gray-100 p-6">
                <h2 className="font-serif font-semibold text-[#1B4332] text-xl mb-6 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-[#D4AF37]" /> Shipping Information
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { key: "name", label: "Full Name", placeholder: "Muhammad Ali", type: "text" },
                      { key: "email", label: "Email Address", placeholder: "email@example.com", type: "email" },
                    ].map((f) => (
                      <div key={f.key}>
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">{f.label} *</label>
                        <input required type={f.type} value={form[f.key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                          placeholder={f.placeholder}
                          className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4332]" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Phone / WhatsApp *</label>
                    <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+92-xxx-xxxxxxx"
                      className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4332]" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Street Address *</label>
                    <input required value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })}
                      placeholder="House No, Street, Area"
                      className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4332]" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">City *</label>
                      <input required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })}
                        placeholder="Karachi"
                        className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4332]" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Province *</label>
                      <select value={form.province} onChange={(e) => setForm({ ...form, province: e.target.value })}
                        className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4332] bg-white">
                        <option value="">Select Province</option>
                        {["Punjab", "Sindh", "KPK", "Balochistan", "Gilgit-Baltistan", "AJK", "ICT"].map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Order Notes (Optional)</label>
                    <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      rows={3} placeholder="Special instructions, preferred delivery time..."
                      className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4332] resize-none" />
                  </div>
                </div>
                <Button variant="gold" size="lg" className="w-full mt-6" onClick={() => setStep(2)}>
                  Continue to Payment →
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white rounded-sm border border-gray-100 p-6">
                <h2 className="font-serif font-semibold text-[#1B4332] text-xl mb-6 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-[#D4AF37]" /> Payment Method
                </h2>
                <div className="space-y-3">
                  {PAYMENT_METHODS.map((pm) => (
                    <label key={pm.id} className={`flex items-center gap-4 p-4 border-2 rounded-sm cursor-pointer transition-all ${paymentMethod === pm.id ? "border-[#1B4332] bg-[#1B4332]/5" : "border-gray-100 hover:border-gray-200"}`}>
                      <input type="radio" name="payment" value={pm.id} checked={paymentMethod === pm.id}
                        onChange={() => setPaymentMethod(pm.id)} className="sr-only" />
                      <div className={`w-10 h-10 rounded-sm flex items-center justify-center ${paymentMethod === pm.id ? "bg-[#1B4332] text-white" : "bg-gray-100 text-gray-500"}`}>
                        {pm.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800 text-sm">{pm.label}</p>
                        <p className="text-xs text-gray-400">{pm.desc}</p>
                      </div>
                      {paymentMethod === pm.id && <CheckCircle className="w-5 h-5 text-[#1B4332]" />}
                    </label>
                  ))}
                </div>

                {paymentMethod === "bank" && (
                  <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-sm text-sm">
                    <p className="font-semibold text-blue-800 mb-2">Bank Transfer Details:</p>
                    <p className="text-blue-600">Bank: HBL · Account: 1234-5678-9012 · Title: Chitral Natural Nuts</p>
                    <p className="text-xs text-blue-400 mt-1">Please include your order number as reference.</p>
                  </div>
                )}

                <div className="flex gap-3 mt-6">
                  <Button variant="outline" size="lg" className="flex-1" onClick={() => setStep(1)}>← Back</Button>
                  <Button variant="gold" size="lg" className="flex-1" onClick={() => setStep(3)}>Review Order →</Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-white rounded-sm border border-gray-100 p-6">
                <h2 className="font-serif font-semibold text-[#1B4332] text-xl mb-6">Review Your Order</h2>
                <div className="divide-y divide-gray-50">
                  {items.map((item) => (
                    <div key={item.id} className="py-3 flex gap-4">
                      <div className="w-14 h-14 bg-[#FAF9F6] rounded-sm flex items-center justify-center text-2xl">🥜</div>
                      <div className="flex-1">
                        <p className="font-medium text-sm text-gray-800">{item.name}</p>
                        <p className="text-xs text-gray-400 mt-0.5">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-[#1B4332] text-sm">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-sm">
                  <div className="flex justify-between text-gray-500">
                    <span>Shipping to: {form.city}, {form.province}</span>
                    <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Payment: {PAYMENT_METHODS.find((p) => p.id === paymentMethod)?.label}</span>
                  </div>
                  <div className="flex justify-between font-bold text-base pt-2 border-t">
                    <span>Grand Total</span>
                    <span className="text-[#1B4332] font-display text-xl">{formatPrice(grandTotal)}</span>
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <Button variant="outline" size="lg" className="flex-1" onClick={() => setStep(2)}>← Back</Button>
                  <Button variant="gold" size="lg" className="flex-1" onClick={handlePlaceOrder}>
                    🛒 Place Order
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Summary sidebar */}
          <div>
            <div className="bg-white rounded-sm border border-gray-100 p-5 sticky top-24">
              <h3 className="font-serif font-semibold text-[#1B4332] mb-4">Order Summary</h3>
              <div className="space-y-2 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600 truncate flex-1">{item.name} ×{item.quantity}</span>
                    <span className="text-gray-800 font-medium ml-2">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-3 space-y-2 text-sm">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span><span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>{shipping === 0 ? "FREE" : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between font-bold text-base pt-1 border-t">
                  <span>Total</span>
                  <span className="text-[#1B4332] font-display text-xl">{formatPrice(grandTotal)}</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-[#1B4332]/5 border border-[#1B4332]/10 rounded-sm">
                <div className="flex items-center gap-2 text-xs text-[#1B4332]">
                  <Shield className="w-4 h-4" />
                  <span className="font-medium">100% Secure & Safe Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
