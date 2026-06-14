"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Heart, Menu, X, Phone, ChevronDown, User } from "lucide-react";
import { useCartStore, useSearchStore } from "@/lib/store";
import { cn, formatPrice } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop", hasDropdown: true,
    dropdown: [
      { label: "All Products", href: "/shop" },
      { label: "Almonds", href: "/shop?category=almonds" },
      { label: "Walnuts", href: "/shop?category=walnuts" },
      { label: "Pistachios", href: "/shop?category=pistachios" },
      { label: "Pine Nuts (Chilgoza)", href: "/shop?category=pine-nuts" },
      { label: "Dried Fruits", href: "/shop?category=dried-fruits" },
      { label: "Mountain Honey", href: "/shop?category=honey" },
      { label: "Mixed Nuts", href: "/shop?category=mixed-nuts" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { openCart, itemCount } = useCartStore();
  const { open: openSearch } = useSearchStore();
  const count = useCartStore((s) => s.itemCount());

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-[#1B4332] text-white text-center text-xs py-2 px-4">
        <span>🚚 Free Shipping on orders above Rs. 2,000 &nbsp;|&nbsp; 📞 WhatsApp: +92-xxx-xxxxxxx &nbsp;|&nbsp; ✅ 100% Natural & Organic Products</span>
      </div>

      <header className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white border-b border-gray-100"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 bg-[#1B4332] rounded-sm flex items-center justify-center">
                <span className="text-[#D4AF37] font-display font-bold text-xl">C</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-bold text-[#1B4332] text-lg leading-tight">Chitral Natural</div>
                <div className="text-xs text-[#D4AF37] font-medium tracking-[0.15em] uppercase leading-tight">Nuts & Dry Fruits</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}>
                  <Link href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#1B4332] transition-colors rounded-sm">
                    {link.label}
                    {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>
                  {link.hasDropdown && link.dropdown && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-xl border border-gray-100 rounded-sm py-2 z-50">
                      {link.dropdown.map((item) => (
                        <Link key={item.href} href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FAF9F6] hover:text-[#1B4332] transition-colors">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-1">
              <button onClick={openSearch} className="p-2 text-gray-600 hover:text-[#1B4332] transition-colors rounded-sm hover:bg-gray-50">
                <Search className="w-5 h-5" />
              </button>
              <Link href="/wishlist" className="p-2 text-gray-600 hover:text-[#1B4332] transition-colors rounded-sm hover:bg-gray-50 hidden sm:flex">
                <Heart className="w-5 h-5" />
              </Link>
              <Link href="/account" className="p-2 text-gray-600 hover:text-[#1B4332] transition-colors rounded-sm hover:bg-gray-50 hidden sm:flex">
                <User className="w-5 h-5" />
              </Link>
              <button onClick={openCart} className="relative p-2 text-gray-600 hover:text-[#1B4332] transition-colors rounded-sm hover:bg-gray-50 ml-1">
                <ShoppingCart className="w-5 h-5" />
                {count > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#D4AF37] text-[#0D2818] text-xs font-bold rounded-full flex items-center justify-center leading-none">
                    {count > 9 ? "9+" : count}
                  </span>
                )}
              </button>
              {/* Mobile menu toggle */}
              <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 ml-1 text-gray-600 hover:text-[#1B4332] rounded-sm">
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link href={link.href} onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#1B4332] hover:bg-[#FAF9F6] rounded-sm transition-colors">
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 space-y-1">
                      {link.dropdown.slice(1).map((item) => (
                        <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 text-xs text-gray-500 hover:text-[#1B4332] transition-colors">
                          — {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2 border-t border-gray-100 flex gap-3">
                <Link href="/wishlist" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600">
                  <Heart className="w-4 h-4" /> Wishlist
                </Link>
                <Link href="/account" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600">
                  <User className="w-4 h-4" /> Account
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
