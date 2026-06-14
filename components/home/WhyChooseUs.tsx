import React from "react";
import { WHY_CHOOSE_US } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-[#1B4332] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 mountain-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <p className="text-[#D4AF37] font-medium text-sm tracking-[0.2em] uppercase mb-3">Why Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">The Chitral Difference</h2>
          <div className="gold-divider mx-auto mb-5" />
          <p className="text-white/65 max-w-xl mx-auto text-base leading-relaxed">
            From mountain harvest to your table — we maintain quality, authenticity, and trust at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-sm p-7 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 group">
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">{item.icon}</div>
              <h3 className="font-serif font-semibold text-white text-lg mb-3">{item.title}</h3>
              <div className="w-8 h-0.5 bg-[#D4AF37] mb-3" />
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
