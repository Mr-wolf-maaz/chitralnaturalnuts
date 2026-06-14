import React from "react";
import Link from "next/link";
import { Mountain, Leaf, Award } from "lucide-react";

export default function ChitralBanner() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#0D2818] via-[#1B4332] to-[#2D6A4F]">
      <div className="absolute inset-0 mountain-pattern opacity-10" />
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-[#D4AF37] font-medium text-sm tracking-[0.2em] uppercase mb-4">Our Heritage</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Straight From the<br /><span className="text-[#D4AF37] italic">Mountains of Chitral</span>
            </h2>
            <div className="h-0.5 w-16 bg-[#D4AF37] mb-5 mx-auto lg:mx-0" />
            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-lg">
              Chitral, nestled at the foot of the Hindu Kush mountains at over 1,500 meters above sea level, produces some of the world's finest nuts. The combination of pure glacial water, intense mountain sunshine, and centuries of traditional farming creates an unmatched flavor profile.
            </p>
            <div className="grid grid-cols-3 gap-5 mb-8">
              {[
                { icon: <Mountain className="w-6 h-6" />, label: "2,500m+", sub: "Altitude" },
                { icon: <Leaf className="w-6 h-6" />, label: "100%", sub: "Natural" },
                { icon: <Award className="w-6 h-6" />, label: "500+", sub: "Farmers" },
              ].map((s) => (
                <div key={s.sub} className="text-center bg-white/10 rounded-sm p-4 border border-white/10">
                  <div className="text-[#D4AF37] mb-2">{s.icon}</div>
                  <div className="font-display text-xl font-bold text-white">{s.label}</div>
                  <div className="text-white/50 text-xs">{s.sub}</div>
                </div>
              ))}
            </div>
            <Link href="/about" className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0D2818] font-semibold px-7 py-3 rounded-sm hover:bg-[#E8CC6A] transition-colors">
              Read Our Story →
            </Link>
          </div>

          {/* Right: big decorative */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20" />
              <div className="absolute inset-8 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20" />
              <div className="absolute inset-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-2">🏔️</div>
                  <div className="font-display text-[#D4AF37] font-bold text-xl">Chitral</div>
                  <div className="text-white/60 text-xs tracking-wider uppercase">Pakistan</div>
                </div>
              </div>
              {/* Floating nut emojis */}
              {["🥜", "🌰", "🍯", "🍑"].map((emoji, i) => (
                <div key={i} className="absolute w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl border border-white/20"
                  style={{
                    top: i === 0 ? "0%" : i === 1 ? "0%" : i === 2 ? "75%" : "75%",
                    left: i === 0 ? "10%" : i === 1 ? "75%" : i === 2 ? "5%" : "80%",
                  }}>
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
