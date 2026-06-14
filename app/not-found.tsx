import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FAF9F6] px-4">
      <div className="text-center max-w-md">
        <div className="text-7xl mb-5">🏔️</div>
        <h1 className="font-display text-6xl font-bold text-[#1B4332] mb-2">404</h1>
        <p className="text-xl font-serif text-gray-600 mb-2">Lost in the Mountains?</p>
        <p className="text-gray-400 text-sm mb-8">The page you're looking for seems to have wandered off into the Chitral valleys. Let's get you back on track.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="bg-[#1B4332] text-white px-6 py-3 rounded-sm font-medium hover:bg-[#2D6A4F] transition-colors">
            ← Go Home
          </Link>
          <Link href="/shop" className="bg-[#D4AF37] text-[#0D2818] px-6 py-3 rounded-sm font-semibold hover:bg-[#E8CC6A] transition-colors">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
