"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Search, X, TrendingUp, ArrowRight } from "lucide-react";
import { useSearchStore } from "@/lib/store";
import { PRODUCTS } from "@/lib/data";

const POPULAR = ["Almonds", "Chilgoza", "Walnuts", "Honey", "Mixed Nuts", "Apricots"];

export default function SearchOverlay() {
  const { isOpen, query, setQuery, close } = useSearchStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.length > 1
    ? PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some((t) => t.includes(query.toLowerCase()))
      ).slice(0, 6)
    : [];

  useEffect(() => {
    if (isOpen) { setTimeout(() => inputRef.current?.focus(), 50); }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close]);

  if (!isOpen) return null;

  return (
    <div className="search-overlay" onClick={close}>
      <div className="w-full max-w-2xl mx-4" onClick={(e) => e.stopPropagation()}>
        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
          <input ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for almonds, walnuts, honey..."
            className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 pl-12 pr-12 py-4 text-lg rounded-sm focus:outline-none focus:border-[#D4AF37]" />
          <button onClick={close} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular searches */}
        {!query && (
          <div className="mt-6">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5" /> Popular Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {POPULAR.map((p) => (
                <button key={p} onClick={() => setQuery(p)}
                  className="px-4 py-2 bg-white/10 hover:bg-[#D4AF37] hover:text-[#0D2818] text-white text-sm rounded-sm transition-all">
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {results.length > 0 && (
          <div className="mt-4 bg-white rounded-sm overflow-hidden shadow-2xl">
            {results.map((p) => (
              <Link key={p.id} href={`/products/${p.slug}`} onClick={close}
                className="flex items-center gap-4 px-4 py-3 hover:bg-[#FAF9F6] transition-colors group border-b border-gray-50 last:border-0">
                <div className="w-12 h-12 bg-[#F0EDE6] rounded-sm flex items-center justify-center text-xl flex-shrink-0">🥜</div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800 text-sm">{p.name}</p>
                  <p className="text-xs text-gray-400">{p.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#1B4332] font-semibold text-sm">Rs. {p.price.toLocaleString()}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#1B4332] transition-colors" />
              </Link>
            ))}
            <Link href={`/shop?search=${query}`} onClick={close}
              className="block text-center py-3 text-sm text-[#1B4332] font-medium hover:bg-[#FAF9F6] transition-colors">
              See all results for "{query}" →
            </Link>
          </div>
        )}

        {query.length > 1 && results.length === 0 && (
          <div className="mt-4 bg-white rounded-sm p-6 text-center">
            <p className="text-gray-500 text-sm">No results for "<strong>{query}</strong>"</p>
            <Link href="/shop" onClick={close} className="text-[#1B4332] text-sm font-medium mt-2 inline-block hover:underline">Browse all products →</Link>
          </div>
        )}
      </div>
    </div>
  );
}
