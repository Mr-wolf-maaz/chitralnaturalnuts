"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-[#1B4332] rounded-sm flex items-center justify-center">
              <span className="text-[#D4AF37] font-display font-bold text-3xl">C</span>
            </div>
            <div>
              <p className="font-display font-bold text-[#1B4332] text-xl leading-tight">Chitral Natural Nuts</p>
              <p className="text-xs text-[#D4AF37] font-medium tracking-[0.15em] uppercase">Premium Quality Since 2020</p>
            </div>
          </Link>
        </div>

        <div className="bg-white rounded-sm border border-gray-100 shadow-lg p-8">
          <h1 className="font-display text-2xl font-bold text-[#1B4332] mb-1">Welcome Back</h1>
          <p className="text-gray-500 text-sm mb-7">Sign in to access your account and orders.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-[#1B4332]" />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type={show ? "text" : "password"} required value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-[#1B4332]" />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <div className="text-right mt-1">
                <Link href="/forgot-password" className="text-xs text-[#1B4332] hover:underline">Forgot password?</Link>
              </div>
            </div>

            <Button variant="primary" size="lg" className="w-full" type="submit" loading={loading}>
              Sign In
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100" /></div>
            <div className="relative text-center"><span className="bg-white px-3 text-xs text-gray-400">or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {["Google", "Facebook"].map((provider) => (
              <button key={provider} className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-sm text-sm font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-colors">
                {provider}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <Link href="/register" className="text-[#1B4332] font-semibold hover:underline">Create one free</Link>
          </p>
        </div>

        {/* Trust badges */}
        <div className="flex justify-center gap-6 mt-6">
          {["🔒 Secure Login", "✅ No Spam", "🚀 Instant Access"].map((b) => (
            <span key={b} className="text-xs text-gray-400">{b}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
