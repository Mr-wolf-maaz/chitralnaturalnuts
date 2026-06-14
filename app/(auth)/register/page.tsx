"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, User, Mail, Phone, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-[#1B4332] rounded-sm flex items-center justify-center">
              <span className="text-[#D4AF37] font-display font-bold text-3xl">C</span>
            </div>
            <p className="font-display font-bold text-[#1B4332] text-xl">Chitral Natural Nuts</p>
          </Link>
        </div>

        <div className="bg-white rounded-sm border border-gray-100 shadow-lg p-8">
          <h1 className="font-display text-2xl font-bold text-[#1B4332] mb-1">Create Account</h1>
          <p className="text-gray-500 text-sm mb-7">Join 5,000+ happy customers enjoying premium Chitral nuts.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { key: "name", label: "Full Name", type: "text", placeholder: "Your full name", icon: <User className="w-4 h-4 text-gray-400" /> },
              { key: "email", label: "Email Address", type: "email", placeholder: "your@email.com", icon: <Mail className="w-4 h-4 text-gray-400" /> },
              { key: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "+92-xxx-xxxxxxx", icon: <Phone className="w-4 h-4 text-gray-400" /> },
            ].map((f) => (
              <div key={f.key}>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">{f.label}</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">{f.icon}</div>
                  <input type={f.type} required value={form[f.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    placeholder={f.placeholder}
                    className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-[#1B4332]" />
                </div>
              </div>
            ))}

            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type={show ? "text" : "password"} required minLength={8}
                  value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="At least 8 characters"
                  className="w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-[#1B4332]" />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" required className="mt-0.5 accent-[#1B4332]" />
              <span className="text-xs text-gray-500">I agree to the <Link href="#" className="text-[#1B4332] hover:underline">Terms of Service</Link> and <Link href="#" className="text-[#1B4332] hover:underline">Privacy Policy</Link></span>
            </label>

            <Button variant="primary" size="lg" className="w-full" type="submit" loading={loading}>
              Create Free Account
            </Button>
          </form>

          {/* Perks */}
          <div className="mt-5 p-4 bg-[#FAF9F6] rounded-sm border border-gray-100">
            <p className="text-xs font-semibold text-[#1B4332] mb-2">Member Benefits:</p>
            <div className="grid grid-cols-2 gap-1.5">
              {["Order tracking", "Wishlist", "Exclusive deals", "Faster checkout"].map((b) => (
                <p key={b} className="text-xs text-gray-500 flex items-center gap-1">✓ {b}</p>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-5">
            Already have an account?{" "}
            <Link href="/login" className="text-[#1B4332] font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
