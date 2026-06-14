"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { FAQS } from "@/lib/data";

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = FAQS.map((cat) => ({
    ...cat,
    questions: cat.questions.filter(
      (q) =>
        q.q.toLowerCase().includes(search.toLowerCase()) ||
        q.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.questions.length > 0);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <div className="bg-[#1B4332] text-white py-16">
        <div className="container-custom text-center">
          <p className="text-[#D4AF37] text-sm font-medium tracking-[0.2em] uppercase mb-3">Help Center</p>
          <h1 className="font-display text-5xl font-bold mb-3">Frequently Asked Questions</h1>
          <div className="h-0.5 w-12 bg-[#D4AF37] mx-auto mb-6" />
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 pl-10 pr-4 py-3 rounded-sm focus:outline-none focus:border-[#D4AF37] text-sm"
            />
          </div>
        </div>
      </div>

      <div className="container-custom py-12 max-w-3xl">
        {filtered.map((cat) => (
          <div key={cat.category} className="mb-8">
            <h2 className="font-display text-2xl font-bold text-[#1B4332] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#D4AF37] rounded-full inline-block" />
              {cat.category}
            </h2>
            <div className="space-y-2">
              {cat.questions.map((item) => {
                const key = `${cat.category}-${item.q}`;
                const isOpen = open === key;
                return (
                  <div key={key} className="bg-white rounded-sm border border-gray-100 overflow-hidden hover:border-[#D4AF37]/30 transition-colors">
                    <button
                      onClick={() => setOpen(isOpen ? null : key)}
                      className="w-full flex items-center justify-between p-5 text-left gap-4"
                    >
                      <span className="font-medium text-gray-800 text-sm">{item.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 border-t border-gray-50">
                        <p className="text-gray-500 text-sm leading-relaxed pt-4">{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Still need help */}
        <div className="mt-10 bg-[#1B4332] rounded-sm p-8 text-center text-white">
          <h3 className="font-display text-2xl font-bold mb-2">Still Have Questions?</h3>
          <p className="text-white/70 text-sm mb-5">Our team is happy to help you personally.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/92xxxxxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-sm font-semibold text-sm hover:bg-[#1da851] transition-colors"
            >
              💬 WhatsApp Us
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0D2818] px-6 py-3 rounded-sm font-semibold text-sm hover:bg-[#E8CC6A] transition-colors"
            >
              ✉️ Send a Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
