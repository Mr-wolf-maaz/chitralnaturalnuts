"use client";
import React, { useState } from "react";

export default function WhatsAppFloat() {
  const [tooltip, setTooltip] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
      {tooltip && (
        <div className="bg-white shadow-xl rounded-sm px-3 py-2 text-sm font-medium text-gray-700 whitespace-nowrap border border-gray-100 animate-slide-up">
          💬 Chat with us on WhatsApp
        </div>
      )}
      <a href="https://wa.me/92xxxxxxxxxx?text=Hi! I'm interested in your products." target="_blank" rel="noopener noreferrer"
        className="whatsapp-float" onMouseEnter={() => setTooltip(true)} onMouseLeave={() => setTooltip(false)}
        aria-label="Chat on WhatsApp">
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.843L.077 23.077l5.376-1.411A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.016-1.375l-.36-.213-3.19.838.852-3.11-.234-.374A9.818 9.818 0 112 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
        </svg>
      </a>
    </div>
  );
}
