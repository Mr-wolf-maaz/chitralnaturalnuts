"use client";
import React from "react";
import Link from "next/link";
import { ShoppingCart, Heart, Star, Eye } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { useCartStore, useWishlistStore } from "@/lib/store";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
  const { addItem, openCart } = useCartStore();
  const { toggle, has } = useWishlistStore();
  const discount = calculateDiscount(product.price, product.comparePrice);
  const wished = has(product.id);

  const handleAddToCart = () => {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image, slug: product.slug });
    toast.success(`${product.name} added to cart!`, {
      style: { background: "#1B4332", color: "#fff", borderRadius: "4px" },
      iconTheme: { primary: "#D4AF37", secondary: "#1B4332" },
    });
  };

  return (
    <div className="group bg-white rounded-sm border border-gray-100 hover:border-[#D4AF37]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
      {/* Image */}
      <div className="relative product-image-wrapper bg-gradient-to-br from-[#FAF9F6] to-[#F0EDE6]">
        {/* Placeholder image with emoji */}
        <div className="absolute inset-0 flex items-center justify-center text-6xl">
          {product.category === "Almonds" ? "🥜" : product.category === "Walnuts" ? "🌰" :
           product.category === "Pistachios" ? "🫘" : product.category === "Pine Nuts" ? "🌲" :
           product.category === "Honey" ? "🍯" : product.category === "Dried Fruits" ? "🍑" : "🥜"}
        </div>

        {/* Badges */}
        {discount > 0 && <span className="badge-sale">-{discount}%</span>}
        {product.isOrganic && !discount && <span className="badge-new">Organic</span>}
        {product.isNew && <span className="badge-new">New</span>}
        {product.isOrganic && <span className="badge-organic">✓ Natural</span>}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#1B4332]/0 group-hover:bg-[#1B4332]/10 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          <Link href={`/products/${product.slug}`}>
            <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#D4AF37] transition-colors" title="Quick View">
              <Eye className="w-4 h-4 text-[#1B4332]" />
            </button>
          </Link>
          <button onClick={() => toggle(product.id)}
            className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-colors ${wished ? "bg-red-50" : "bg-white hover:bg-red-50"}`} title="Wishlist">
            <Heart className={`w-4 h-4 ${wished ? "fill-red-500 text-red-500" : "text-gray-500"}`} />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center gap-1 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-brand-gold text-[#D4AF37]" : "text-gray-200"}`} />
          ))}
          <span className="text-xs text-gray-400 ml-1">({product.reviewCount})</span>
        </div>

        <Link href={`/products/${product.slug}`}>
          <h3 className="font-serif font-semibold text-gray-800 text-sm hover:text-[#1B4332] transition-colors line-clamp-1 mb-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-gray-400 mb-3 line-clamp-1">{product.shortDesc}</p>

        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold text-[#1B4332] text-base">{formatPrice(product.price)}</span>
            {product.comparePrice && (
              <span className="text-xs text-gray-400 line-through ml-2">{formatPrice(product.comparePrice)}</span>
            )}
          </div>
          <button onClick={handleAddToCart}
            className="w-9 h-9 bg-[#1B4332] text-white rounded-sm flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0D2818] transition-all duration-200 shadow-sm hover:shadow-md">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>

        {product.stock < 10 && product.stock > 0 && (
          <p className="text-xs text-orange-500 mt-2">⚡ Only {product.stock} left in stock</p>
        )}
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.isFeatured).slice(0, 8);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#D4AF37] font-medium text-sm tracking-[0.2em] uppercase mb-3">Handpicked for You</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B4332] mb-4">Featured Products</h2>
          <div className="gold-divider mx-auto mb-5" />
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Our most loved products — premium quality nuts and dry fruits sourced directly from Chitral's mountain valleys.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link href="/shop">
            <Button variant="outline" size="lg">View All Products →</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
