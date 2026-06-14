import React from "react";
import Link from "next/link";
import { CATEGORIES } from "@/lib/data";

export default function CategoryBanner() {
  return (
    <section className="section-padding bg-[#F0EDE6]">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-[#D4AF37] font-medium text-sm tracking-[0.2em] uppercase mb-3">Explore</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B4332] mb-4">Shop by Category</h2>
          <div className="gold-divider mx-auto" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {CATEGORIES.map((cat) => (
            <Link key={cat.id} href={`/shop?category=${cat.slug}`}
              className="group flex flex-col items-center gap-3 p-4 bg-white rounded-sm border border-gray-100 hover:border-[#D4AF37] hover:shadow-md transition-all duration-300 text-center">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{cat.icon}</span>
              <div>
                <p className="text-xs font-semibold text-gray-700 group-hover:text-[#1B4332] transition-colors leading-tight">{cat.name}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{cat.count} products</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
