"use client";
import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-[#D4AF37] font-medium text-sm tracking-[0.2em] uppercase mb-3">Reviews</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B4332] mb-4">What Our Customers Say</h2>
          <div className="gold-divider mx-auto mb-5" />
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-brand-gold text-[#D4AF37]" />)}
            <span className="text-gray-600 font-semibold ml-1">4.8 / 5</span>
            <span className="text-gray-400 text-sm">from 800+ reviews</span>
          </div>
        </div>

        {/* Grid of testimonials */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-[#FAF9F6] rounded-sm p-6 border border-gray-100 hover:shadow-md transition-shadow relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#D4AF37]/20" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1B4332] text-[#D4AF37] rounded-full flex items-center justify-center font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location} · {t.date}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-[#D4AF37]" />)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{t.comment}</p>
              <div className="mt-3 pt-3 border-t border-gray-200">
                <span className="text-xs text-[#1B4332] font-medium">✓ Verified Purchase · {t.product}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="bg-[#FAF9F6] rounded-sm p-6 border border-gray-100 relative min-h-[240px]">
            <Quote className="absolute top-4 right-4 w-8 h-8 text-[#D4AF37]/20" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#1B4332] text-[#D4AF37] rounded-full flex items-center justify-center font-bold text-sm">
                {TESTIMONIALS[active].avatar}
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{TESTIMONIALS[active].name}</p>
                <p className="text-xs text-gray-400">{TESTIMONIALS[active].location}</p>
              </div>
            </div>
            <div className="flex gap-0.5 mb-3">
              {[...Array(TESTIMONIALS[active].rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-[#D4AF37]" />)}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{TESTIMONIALS[active].comment}</p>
          </div>
          <div className="flex justify-center items-center gap-4 mt-4">
            <button onClick={prev} className="p-2 rounded-full border border-gray-200 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-[#D4AF37]" : "w-1.5 bg-gray-300"}`} />
              ))}
            </div>
            <button onClick={next} className="p-2 rounded-full border border-gray-200 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
