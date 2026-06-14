"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Heart, Star, Shield, Truck, RefreshCw, Minus, Plus, Share2, CheckCircle } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { useCartStore, useWishlistStore } from "@/lib/store";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug) || PRODUCTS[0];
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "nutrition" | "reviews">("description");
  const { addItem, openCart } = useCartStore();
  const { toggle, has } = useWishlistStore();
  const discount = calculateDiscount(product.price, product.comparePrice);
  const related = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      addItem({ id: product.id, name: product.name, price: product.price, image: product.image, slug: product.slug });
    }
    toast.success(`${qty}x ${product.name} added to cart!`, {
      style: { background: "#1B4332", color: "#fff", borderRadius: "4px" },
    });
    openCart();
  };

  const emoji = product.category === "Almonds" ? "🥜" : product.category === "Walnuts" ? "🌰" :
    product.category === "Pistachios" ? "🫘" : product.category === "Pine Nuts" ? "🌲" :
    product.category === "Honey" ? "🍯" : product.category === "Dried Fruits" ? "🍑" : "🥜";

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-[#1B4332]">Home</Link> /
          <Link href="/shop" className="hover:text-[#1B4332]">Shop</Link> /
          <span className="text-gray-700">{product.name}</span>
        </nav>

        {/* Product main */}
        <div className="bg-white rounded-sm border border-gray-100 p-6 md:p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Image */}
            <div className="space-y-3">
              <div className="aspect-square bg-gradient-to-br from-[#FAF9F6] to-[#F0EDE6] rounded-sm flex items-center justify-center text-8xl relative overflow-hidden">
                {emoji}
                {discount > 0 && <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-sm">-{discount}% OFF</span>}
                {product.isOrganic && <span className="absolute top-4 right-4 bg-[#D4AF37] text-[#0D2818] text-xs font-bold px-2 py-1 rounded-sm">✓ ORGANIC</span>}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="aspect-square bg-gradient-to-br from-[#FAF9F6] to-[#F0EDE6] rounded-sm flex items-center justify-center text-2xl cursor-pointer hover:ring-2 hover:ring-[#D4AF37] transition-all opacity-70 hover:opacity-100">
                    {emoji}
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">{product.category}</span>
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-[#1B4332] mt-1">{product.name}</h1>
                </div>
                <button onClick={() => toggle(product.id)} className={`mt-1 p-2 rounded-sm border transition-colors ${has(product.id) ? "border-red-200 bg-red-50 text-red-500" : "border-gray-200 text-gray-400 hover:border-red-200 hover:text-red-400"}`}>
                  <Heart className={`w-5 h-5 ${has(product.id) ? "fill-current" : ""}`} />
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-brand-gold text-[#D4AF37]" : "text-gray-200"}`} />)}</div>
                <span className="font-semibold text-[#1B4332] text-sm">{product.rating}</span>
                <span className="text-gray-400 text-sm">({product.reviewCount} reviews)</span>
                <span className="text-gray-300">·</span>
                <span className="text-xs text-green-600 font-medium">500+ sold</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-5">
                <span className="font-display text-4xl font-bold text-[#1B4332]">{formatPrice(product.price)}</span>
                {product.comparePrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through">{formatPrice(product.comparePrice)}</span>
                    <span className="bg-red-100 text-red-600 text-sm font-bold px-2 py-0.5 rounded-sm">{discount}% OFF</span>
                  </>
                )}
              </div>
              <p className="text-xs text-gray-400 -mt-3 mb-5">Per {product.weight}{product.unit} · Origin: {product.origin}</p>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 border-l-2 border-[#D4AF37] pl-4">{product.shortDesc}</p>

              {/* Benefits pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.benefits.map((b) => (
                  <span key={b} className="flex items-center gap-1 text-xs bg-[#1B4332]/10 text-[#1B4332] px-2.5 py-1 rounded-sm font-medium">
                    <CheckCircle className="w-3 h-3" /> {b}
                  </span>
                ))}
              </div>

              {/* Quantity + Add to Cart */}
              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center border-2 border-gray-200 rounded-sm">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-semibold text-gray-800">{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Button variant="gold" size="lg" className="flex-1" onClick={handleAdd}>
                  <ShoppingCart className="w-4 h-4" /> Add to Cart · {formatPrice(product.price * qty)}
                </Button>
              </div>

              <Link href="/checkout">
                <Button variant="primary" size="lg" className="w-full mb-5">Buy Now — Fast Checkout</Button>
              </Link>

              {/* Trust strip */}
              <div className="grid grid-cols-3 gap-3 pt-5 border-t border-gray-100">
                {[
                  { icon: <Shield className="w-4 h-4" />, text: "Quality Guarantee" },
                  { icon: <Truck className="w-4 h-4" />, text: "Free Shipping >2K" },
                  { icon: <RefreshCw className="w-4 h-4" />, text: "Easy Returns" },
                ].map((t) => (
                  <div key={t.text} className="flex items-center gap-2 text-[#1B4332]">
                    {t.icon}
                    <span className="text-xs font-medium text-gray-600">{t.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-sm border border-gray-100 mb-8">
          <div className="flex border-b border-gray-100">
            {(["description", "nutrition", "reviews"] as const).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium capitalize border-b-2 transition-colors ${activeTab === tab ? "border-[#1B4332] text-[#1B4332]" : "border-transparent text-gray-400 hover:text-gray-700"}`}>
                {tab} {tab === "reviews" && `(${product.reviewCount})`}
              </button>
            ))}
          </div>
          <div className="p-6">
            {activeTab === "description" && (
              <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">{product.description}</p>
                <h4 className="font-serif font-semibold text-[#1B4332] mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {product.benefits.map((b) => <li key={b} className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />{b}</li>)}
                </ul>
                <div className="mt-4 p-4 bg-[#FAF9F6] rounded-sm">
                  <p className="text-xs font-semibold text-[#1B4332] mb-1">Sourcing & Storage:</p>
                  <p className="text-xs text-gray-500">Origin: {product.origin} · Weight: {product.weight}{product.unit} · SKU: {product.sku}</p>
                  <p className="text-xs text-gray-500 mt-1">Store in a cool, dry place away from direct sunlight. Refrigerate after opening for maximum freshness.</p>
                </div>
              </div>
            )}
            {activeTab === "nutrition" && (
              <div>
                <h4 className="font-serif font-semibold text-[#1B4332] mb-4">Nutritional Information (per 100g)</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: "Calories", value: "579 kcal" }, { label: "Protein", value: "21g" },
                    { label: "Total Fat", value: "50g" }, { label: "Carbohydrates", value: "22g" },
                    { label: "Fiber", value: "12g" }, { label: "Vitamin E", value: "26mg" },
                    { label: "Calcium", value: "264mg" }, { label: "Iron", value: "3.7mg" },
                  ].map((n) => (
                    <div key={n.label} className="bg-[#FAF9F6] p-3 rounded-sm text-center">
                      <p className="font-bold text-[#1B4332]">{n.value}</p>
                      <p className="text-xs text-gray-500">{n.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4">* Values are approximate and may vary. Consult a nutritionist for specific dietary advice.</p>
              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                <div className="flex items-center gap-6 mb-6 p-4 bg-[#FAF9F6] rounded-sm">
                  <div className="text-center">
                    <div className="font-display text-5xl font-bold text-[#1B4332]">{product.rating}</div>
                    <div className="flex justify-center my-1">{[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-brand-gold text-[#D4AF37]" : "text-gray-200"}`} />)}</div>
                    <p className="text-xs text-gray-400">{product.reviewCount} reviews</p>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    {[5, 4, 3, 2, 1].map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 w-4">{s}</span>
                        <Star className="w-3 h-3 fill-brand-gold text-[#D4AF37]" />
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#D4AF37] rounded-full" style={{ width: s === 5 ? "70%" : s === 4 ? "20%" : s === 3 ? "7%" : "2%" }} />
                        </div>
                        <span className="text-xs text-gray-400 w-6">{s === 5 ? "70%" : s === 4 ? "20%" : s === 3 ? "7%" : "2%"}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "Ayesha R.", date: "Dec 10, 2024", rating: 5, comment: "Absolutely amazing quality! The freshness is unmatched. Will definitely reorder." },
                    { name: "Hassan M.", date: "Dec 5, 2024", rating: 5, comment: "Best nuts I've ever had. The packaging is premium and delivery was super fast." },
                    { name: "Sara K.", date: "Nov 28, 2024", rating: 4, comment: "Very good quality. Slightly expensive but worth every rupee for the quality." },
                  ].map((r, i) => (
                    <div key={i} className="border-b border-gray-100 pb-4 last:border-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-[#1B4332] text-[#D4AF37] rounded-full flex items-center justify-center text-xs font-bold">{r.name[0]}</div>
                          <div>
                            <p className="text-sm font-semibold text-gray-800">{r.name}</p>
                            <p className="text-xs text-gray-400">{r.date} · ✓ Verified</p>
                          </div>
                        </div>
                        <div className="flex">{[...Array(r.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-brand-gold text-[#D4AF37]" />)}</div>
                      </div>
                      <p className="text-sm text-gray-600">{r.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <h2 className="font-display text-2xl font-bold text-[#1B4332] mb-5">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((p) => (
                <Link key={p.id} href={`/products/${p.slug}`} className="group bg-white rounded-sm border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-md transition-all overflow-hidden">
                  <div className="aspect-square bg-[#FAF9F6] flex items-center justify-center text-5xl">🥜</div>
                  <div className="p-3">
                    <p className="text-sm font-serif font-semibold text-gray-800 group-hover:text-[#1B4332] transition-colors line-clamp-1">{p.name}</p>
                    <p className="font-bold text-[#1B4332] text-sm mt-1">{formatPrice(p.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
