"use client";
import React from "react";
import Link from "next/link";
import { Heart, ShoppingCart, X } from "lucide-react";
import { useWishlistStore, useCartStore } from "@/lib/store";
import { PRODUCTS } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function WishlistPage() {
  const { items, toggle } = useWishlistStore();
  const { addItem } = useCartStore();
  const wishlistProducts = PRODUCTS.filter((p) => items.includes(p.id));

  const handleAdd = (p: typeof PRODUCTS[0]) => {
    addItem({ id: p.id, name: p.name, price: p.price, image: p.image, slug: p.slug });
    toast.success(`${p.name} added to cart!`, {
      style: { background: "#1B4332", color: "#fff", borderRadius: "4px" },
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <div className="bg-[#1B4332] text-white py-12">
        <div className="container-custom">
          <h1 className="font-display text-4xl font-bold flex items-center gap-3">
            <Heart className="w-8 h-8 text-[#D4AF37]" /> My Wishlist
            <span className="text-[#D4AF37] text-2xl">({wishlistProducts.length})</span>
          </h1>
        </div>
      </div>

      <div className="container-custom py-10">
        {wishlistProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-sm border border-gray-100">
            <Heart className="w-16 h-16 text-gray-200 mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold text-gray-700 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-400 mb-6">Save your favourite products here.</p>
            <Link href="/shop"><Button variant="primary" size="lg">Browse Products</Button></Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {wishlistProducts.map((p) => (
              <div key={p.id} className="bg-white rounded-sm border border-gray-100 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <div className="relative aspect-square bg-[#FAF9F6] flex items-center justify-center text-5xl">
                  🥜
                  <button onClick={() => toggle(p.id)} className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center text-red-400 hover:text-red-600 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-4">
                  <Link href={`/products/${p.slug}`}>
                    <h3 className="font-serif font-semibold text-gray-800 text-sm hover:text-[#1B4332] transition-colors">{p.name}</h3>
                  </Link>
                  <p className="font-bold text-[#1B4332] mt-1 mb-3">{formatPrice(p.price)}</p>
                  <button onClick={() => handleAdd(p)}
                    className="w-full flex items-center justify-center gap-2 bg-[#1B4332] text-white py-2 rounded-sm text-sm font-medium hover:bg-[#D4AF37] hover:text-[#0D2818] transition-colors">
                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
