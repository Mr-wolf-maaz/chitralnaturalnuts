"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, X, ShoppingCart, Heart, Star, Grid, List } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import { useCartStore, useWishlistStore } from "@/lib/store";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("featured");
  const [organic, setOrganic] = useState(false);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [showFilters, setShowFilters] = useState(false);
  const [view, setView] = useState<"grid" | "list">("grid");
  const { addItem } = useCartStore();
  const { toggle, has } = useWishlistStore();

  const filtered = useMemo(() => {
    let result = [...PRODUCTS];
    if (search) result = result.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase()));
    if (category !== "all") result = result.filter((p) => p.category.toLowerCase().replace(/\s+/g, "-") === category || p.slug.includes(category));
    if (organic) result = result.filter((p) => p.isOrganic);
    result = result.filter((p) => p.price <= maxPrice);
    switch (sort) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      case "newest": result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
      default: result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }
    return result;
  }, [search, category, sort, organic, maxPrice]);

  const handleAdd = (p: typeof PRODUCTS[0]) => {
    addItem({ id: p.id, name: p.name, price: p.price, image: p.image, slug: p.slug });
    toast.success(`${p.name} added!`, { style: { background: "#1B4332", color: "#fff", borderRadius: "4px" } });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <div className="bg-[#1B4332] text-white py-12">
        <div className="container-custom">
          <nav className="text-xs text-white/50 mb-3">
            <Link href="/" className="hover:text-[#D4AF37]">Home</Link> / <span className="text-white/80">Shop</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-2">Our Products</h1>
          <p className="text-white/70">Premium nuts & dry fruits from the mountains of Chitral</p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar / Filters */}
          <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="bg-white rounded-sm border border-gray-100 p-5 sticky top-24 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-semibold text-[#1B4332]">Filters</h3>
                <button onClick={() => { setCategory("all"); setOrganic(false); setMaxPrice(5000); setSearch(""); }}
                  className="text-xs text-gray-400 hover:text-[#1B4332]">Reset All</button>
              </div>

              {/* Search */}
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..."
                    className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-sm focus:outline-none focus:border-[#1B4332]" />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 block">Category</label>
                <div className="space-y-1.5">
                  {[{ id: "all", name: "All Products", slug: "", icon: "🛍️", count: 0 }, ...CATEGORIES].map((cat) => (
                    <button key={cat.id} onClick={() => setCategory(cat.id === "all" ? "all" : cat.slug)}
                      className={`w-full text-left text-sm px-3 py-2 rounded-sm transition-colors flex items-center justify-between
                        ${(category === "all" && cat.id === "all") || category === cat.slug
                          ? "bg-[#1B4332] text-white" : "hover:bg-[#FAF9F6] text-gray-700"}`}>
                      <span>{"icon" in cat ? `${cat.icon} ` : ""}{cat.name}</span>
                      {cat.count > 0 && <span className={`text-xs ${(category === cat.slug) ? "text-white/70" : "text-gray-400"}`}>{cat.count}</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">Max Price: {formatPrice(maxPrice)}</label>
                <input type="range" min={500} max={5000} step={100} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#1B4332]" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>Rs. 500</span><span>Rs. 5,000</span></div>
              </div>

              {/* Organic toggle */}
              <label className="flex items-center gap-3 cursor-pointer">
                <div className={`w-10 h-5 rounded-full transition-colors ${organic ? "bg-[#1B4332]" : "bg-gray-200"} relative`}
                  onClick={() => setOrganic(!organic)}>
                  <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${organic ? "translate-x-5" : "translate-x-0.5"}`} />
                </div>
                <span className="text-sm font-medium text-gray-700">Organic Only</span>
              </label>
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5 bg-white p-3 rounded-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden flex items-center gap-2 text-sm font-medium text-[#1B4332] border border-[#1B4332] px-3 py-1.5 rounded-sm">
                  <SlidersHorizontal className="w-4 h-4" /> Filters
                </button>
                <p className="text-sm text-gray-500"><span className="font-semibold text-gray-800">{filtered.length}</span> products</p>
              </div>
              <div className="flex items-center gap-3">
                <select value={sort} onChange={(e) => setSort(e.target.value)}
                  className="text-sm border border-gray-200 rounded-sm px-3 py-1.5 focus:outline-none focus:border-[#1B4332]">
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Best Rated</option>
                  <option value="newest">Newest First</option>
                </select>
                <div className="flex border border-gray-200 rounded-sm overflow-hidden">
                  <button onClick={() => setView("grid")} className={`p-1.5 ${view === "grid" ? "bg-[#1B4332] text-white" : "text-gray-400 hover:text-[#1B4332]"}`}>
                    <Grid className="w-4 h-4" />
                  </button>
                  <button onClick={() => setView("list")} className={`p-1.5 ${view === "list" ? "bg-[#1B4332] text-white" : "text-gray-400 hover:text-[#1B4332]"}`}>
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-sm border border-gray-100">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="font-serif text-xl text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-400 text-sm mb-4">Try adjusting your filters</p>
                <button onClick={() => { setSearch(""); setCategory("all"); setOrganic(false); setMaxPrice(5000); }}
                  className="text-[#1B4332] font-medium text-sm hover:underline">Clear all filters</button>
              </div>
            ) : (
              <div className={view === "grid" ? "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4" : "space-y-3"}>
                {filtered.map((p) => {
                  const discount = calculateDiscount(p.price, p.comparePrice);
                  if (view === "list") return (
                    <div key={p.id} className="bg-white rounded-sm border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-md transition-all flex gap-4 p-4">
                      <div className="w-24 h-24 bg-[#F0EDE6] rounded-sm flex items-center justify-center text-4xl flex-shrink-0">🥜</div>
                      <div className="flex-1 min-w-0">
                        <Link href={`/products/${p.slug}`}><h3 className="font-serif font-semibold text-gray-800 hover:text-[#1B4332] transition-colors">{p.name}</h3></Link>
                        <div className="flex items-center gap-1 my-1">{[...Array(5)].map((_, i) => <Star key={i} className={`w-3 h-3 ${i < Math.floor(p.rating) ? "fill-brand-gold text-[#D4AF37]" : "text-gray-200"}`} />)}<span className="text-xs text-gray-400">({p.reviewCount})</span></div>
                        <p className="text-xs text-gray-400 line-clamp-1 mb-2">{p.shortDesc}</p>
                        <div className="flex items-center justify-between">
                          <div><span className="font-bold text-[#1B4332]">{formatPrice(p.price)}</span>{p.comparePrice && <span className="text-xs text-gray-400 line-through ml-2">{formatPrice(p.comparePrice)}</span>}</div>
                          <div className="flex gap-2">
                            <button onClick={() => toggle(p.id)} className={`p-2 rounded-sm border transition-colors ${has(p.id) ? "border-red-200 bg-red-50" : "border-gray-200 hover:border-[#D4AF37]"}`}><Heart className={`w-4 h-4 ${has(p.id) ? "fill-red-500 text-red-500" : "text-gray-500"}`} /></button>
                            <button onClick={() => handleAdd(p)} className="p-2 bg-[#1B4332] text-white rounded-sm hover:bg-[#D4AF37] hover:text-[#0D2818] transition-colors"><ShoppingCart className="w-4 h-4" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                  return (
                    <div key={p.id} className="group bg-white rounded-sm border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                      <div className="relative aspect-square bg-gradient-to-br from-[#FAF9F6] to-[#F0EDE6] flex items-center justify-center text-5xl">
                        🥜
                        {discount > 0 && <span className="badge-sale">-{discount}%</span>}
                        {p.isOrganic && <span className="badge-organic">✓</span>}
                        {p.isNew && !discount && <span className="badge-new">New</span>}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 gap-2">
                          <button onClick={() => toggle(p.id)} className={`w-9 h-9 rounded-full shadow-md bg-white flex items-center justify-center transition-colors ${has(p.id) ? "text-red-500" : "text-gray-600 hover:text-red-400"}`}><Heart className={`w-4 h-4 ${has(p.id) ? "fill-current" : ""}`} /></button>
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="flex items-center gap-0.5 mb-1">{[...Array(5)].map((_, i) => <Star key={i} className={`w-3 h-3 ${i < Math.floor(p.rating) ? "fill-brand-gold text-[#D4AF37]" : "text-gray-200"}`} />)}<span className="text-[10px] text-gray-400 ml-1">({p.reviewCount})</span></div>
                        <Link href={`/products/${p.slug}`}><h3 className="font-serif font-semibold text-xs sm:text-sm text-gray-800 hover:text-[#1B4332] transition-colors line-clamp-1">{p.name}</h3></Link>
                        <div className="flex items-center justify-between mt-2">
                          <div>
                            <span className="font-bold text-[#1B4332] text-sm">{formatPrice(p.price)}</span>
                            {p.comparePrice && <span className="text-[10px] text-gray-400 line-through ml-1">{formatPrice(p.comparePrice)}</span>}
                          </div>
                          <button onClick={() => handleAdd(p)} className="w-8 h-8 bg-[#1B4332] text-white rounded-sm flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0D2818] transition-colors">
                            <ShoppingCart className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
