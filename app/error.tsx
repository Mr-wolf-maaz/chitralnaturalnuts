"use client";
import React from "react";
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-[50vh] flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <div className="text-5xl mb-4">⚠️</div>
        <h2 className="font-display text-2xl font-bold text-[#1B4332] mb-2">Something went wrong</h2>
        <p className="text-gray-500 text-sm mb-5">{error.message || "An unexpected error occurred."}</p>
        <button onClick={reset} className="bg-[#1B4332] text-white px-6 py-2.5 rounded-sm font-medium hover:bg-[#2D6A4F] transition-colors">
          Try Again
        </button>
      </div>
    </div>
  );
}
