"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, Send } from "lucide-react";

const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1C4.5 20.5 12 20.5 12 20.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z"/>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer className="bg-[#1B4332] text-white">
      {/* Newsletter strip */}
      <div className="border-b border-white/10 bg-[#0D2818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-semibold text-[#D4AF37] mb-1">Get Exclusive Offers</h3>
              <p className="text-white/70 text-sm">Subscribe for health tips, new arrivals, and exclusive discounts.</p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 text-[#D4AF37] font-medium">
                <span className="text-2xl">✓</span> Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-0 max-w-sm">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                  placeholder="Your email address"
                  className="flex-1 md:w-64 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-[#D4AF37] rounded-l-sm" />
                <button type="submit" className="bg-[#D4AF37] text-[#0D2818] px-5 py-3 font-semibold text-sm hover:bg-[#E8CC6A] transition-colors rounded-r-sm flex items-center gap-1">
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-sm flex items-center justify-center">
                <span className="text-[#0D2818] font-display font-bold text-xl">C</span>
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg leading-tight">Chitral Natural</div>
                <div className="text-xs text-[#D4AF37] font-medium tracking-[0.12em] uppercase">Nuts & Dry Fruits</div>
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-6">
              Premium quality nuts and dry fruits sourced directly from the pristine mountains of Chitral, Pakistan. Pure, natural, and delivered fresh to your door.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: <FacebookIcon />, href: "#", label: "Facebook" },
                { icon: <InstagramIcon />, href: "#", label: "Instagram" },
                { icon: <YoutubeIcon />, href: "#", label: "YouTube" },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 rounded-sm bg-white/10 hover:bg-[#D4AF37] hover:text-[#0D2818] text-white/70 flex items-center justify-center transition-all duration-200">
                  {s.icon}
                </a>
              ))}
              {/* WhatsApp */}
              <a href="https://wa.me/92xxxxxxxxxx" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-9 h-9 rounded-sm bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.843L.077 23.077l5.376-1.411A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.016-1.375l-.36-.213-3.19.838.852-3.11-.234-.374A9.818 9.818 0 112 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-white mb-5 text-base">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Shop All Products", href: "/shop" },
                { label: "About Chitral Nuts", href: "/about" },
                { label: "Our Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
                { label: "FAQ", href: "/faq" },
                { label: "Track Your Order", href: "/account/orders" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/65 hover:text-[#D4AF37] text-sm flex items-center gap-1.5 transition-colors group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 transition-opacity" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif font-semibold text-white mb-5 text-base">Shop By Category</h4>
            <ul className="space-y-3">
              {[
                { label: "🥜 Premium Almonds", href: "/shop?category=almonds" },
                { label: "🌰 Walnuts (Akhrot)", href: "/shop?category=walnuts" },
                { label: "🫘 Pistachios (Pista)", href: "/shop?category=pistachios" },
                { label: "🌲 Pine Nuts (Chilgoza)", href: "/shop?category=pine-nuts" },
                { label: "🍑 Dried Apricots", href: "/shop?category=dried-fruits" },
                { label: "🍯 Mountain Honey", href: "/shop?category=honey" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/65 hover:text-[#D4AF37] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-white mb-5 text-base">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span className="text-white/65 text-sm">Chitral Bazaar, Chitral City,<br />Khyber Pakhtunkhwa, Pakistan</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <div className="text-white/65 text-sm">
                  <div>+92-xxx-xxxxxxx</div>
                  <div className="text-xs text-white/40 mt-0.5">Mon–Sat, 9am–6pm PKT</div>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@chitralnuts.pk" className="text-white/65 hover:text-[#D4AF37] text-sm transition-colors">
                  hello@chitralnuts.pk
                </a>
              </li>
            </ul>
            {/* Payment icons */}
            <div className="mt-6">
              <p className="text-white/40 text-xs mb-3 uppercase tracking-wider">We Accept</p>
              <div className="flex flex-wrap gap-2">
                {["COD", "EasyPaisa", "JazzCash", "Bank Transfer", "Stripe"].map((pm) => (
                  <span key={pm} className="text-[10px] px-2 py-1 bg-white/10 text-white/60 rounded-sm font-medium">{pm}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/50 text-xs">© 2024 Chitral Natural Nuts. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((l) => (
              <Link key={l} href="#" className="text-white/40 hover:text-[#D4AF37] text-xs transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
