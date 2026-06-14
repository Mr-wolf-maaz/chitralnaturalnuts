import React from "react";
import { HEALTH_BENEFITS } from "@/lib/data";

export default function HealthBenefits() {
  return (
    <section className="section-padding bg-[#FAF9F6]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-[#D4AF37] font-medium text-sm tracking-[0.2em] uppercase mb-3">Superfoods</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B4332] mb-4">Health Benefits</h2>
          <div className="gold-divider mx-auto mb-5" />
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Nature's most powerful superfoods — backed by science, treasured by tradition. Every nut is a powerhouse of nutrition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HEALTH_BENEFITS.map((item, i) => (
            <div key={i} className="bg-white rounded-sm border border-gray-100 p-7 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="font-serif font-semibold text-[#1B4332] text-lg mb-2">{item.title}</h3>
              <div className="gold-divider mx-auto mb-3" />
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
              <div className="flex flex-wrap justify-center gap-1.5">
                {item.nuts.map((n) => (
                  <span key={n} className="text-xs bg-[#1B4332]/10 text-[#1B4332] px-2 py-0.5 rounded-sm">{n}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
