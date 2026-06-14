"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Star, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const SLIDES = [
  {
    title: "Premium Natural Nuts",
    subtitle: "from the Mountains of Chitral",
    desc: "Hand-picked from pristine Himalayan valleys — pure, fresh, and delivered to your door across Pakistan.",
    cta: "Shop Now",
    ctaLink: "/shop",
    badge: "🏔️ Sourced at 2,500m Altitude",
    accent: "Chilgoza · Almonds · Walnuts",
    bg: "from-[#0d2818] via-[#1B4332] to-[#2D6A4F]",
  },
  {
    title: "Rare Chilgoza",
    subtitle: "Pine Nuts of the Himalayas",
    desc: "The crown jewel of Chitral — rare Chilgoza pine nuts harvested from ancient forests, a luxury superfood.",
    cta: "Discover Chilgoza",
    ctaLink: "/products/pine-nuts-chilgoza",
    badge: "⭐ Bestseller of 2024",
    accent: "3 Years to Harvest · Worth Every Bite",
    bg: "from-[#1a1a0d] via-[#2D4A1A] to-[#1B4332]",
  },
  {
    title: "Organic Mountain Honey",
    subtitle: "Raw, Unfiltered & Pure",
    desc: "Collected by traditional beekeepers from wildflower meadows at 3,000m. No processing, no additives — just pure mountain gold.",
    cta: "Taste the Difference",
    ctaLink: "/products/organic-mountain-honey",
    badge: "🍯 100% Raw & Unfiltered",
    accent: "Antibacterial · Anti-inflammatory",
    bg: "from-[#2d1a00] via-[#4a2d00] to-[#1B4332]",
  },
];

const TRUST_BADGES = [
  { icon: <Shield className="w-4 h-4" />, text: "100% Natural" },
  { icon: <Truck className="w-4 h-4" />, text: "Free Shipping >2K" },
  { icon: <Star className="w-4 h-4" />, text: "4.8★ Rated" },
  { icon: <ShoppingBag className="w-4 h-4" />, text: "5000+ Happy Customers" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[current];

  return (
    <section className="relative min-h-[90vh] flex flex-col overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.bg} transition-all duration-1000`} />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5 mountain-pattern" />

      {/* Decorative gold circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-1.5 rounded-sm text-sm font-medium mb-8 animate-fade-in">
              {slide.badge}
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4 animate-slide-up">
              <span className="text-white block">{slide.title}</span>
              <span className="text-[#D4AF37] block italic">{slide.subtitle}</span>
            </h1>

            {/* Accent line */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#D4AF37]" />
              <p className="text-[#D4AF37]/70 text-sm font-medium tracking-wider uppercase">{slide.accent}</p>
            </div>

            {/* Description */}
            <p className="text-white/75 text-lg leading-relaxed max-w-xl mb-10 animate-slide-up">
              {slide.desc}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href={slide.ctaLink}>
                <Button variant="gold" size="lg" className="font-semibold">
                  <ShoppingBag className="w-4 h-4" />
                  {slide.cta}
                </Button>
              </Link>
              <Link href="/about">
                <button className="px-8 py-3.5 border border-white/30 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] font-medium text-base rounded-sm transition-all duration-300 tracking-wide">
                  Our Story
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/10">
              {[
                { num: "500+", label: "Farmers in Chitral" },
                { num: "12+", label: "Premium Products" },
                { num: "5,000+", label: "Happy Customers" },
                { num: "4.8★", label: "Average Rating" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-bold text-[#D4AF37]">{s.num}</div>
                  <div className="text-white/50 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="relative z-10 flex justify-center gap-2 pb-8">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-[#D4AF37]" : "w-4 bg-white/30"}`} />
        ))}
      </div>

      {/* Trust badges bar */}
      <div className="relative z-10 bg-black/30 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap justify-center sm:justify-between gap-4">
            {TRUST_BADGES.map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-white/70 text-sm">
                <span className="text-[#D4AF37]">{b.icon}</span>
                {b.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
