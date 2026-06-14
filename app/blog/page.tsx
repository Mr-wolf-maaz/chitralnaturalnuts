import React from "react";
import Link from "next/link";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";

export const metadata = { title: "Health & Nutrition Blog", description: "Expert articles on nut nutrition, health benefits, recipes, and the rich food culture of Chitral, Pakistan." };

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <div className="bg-[#1B4332] text-white py-16">
        <div className="container-custom text-center">
          <p className="text-[#D4AF37] text-sm font-medium tracking-[0.2em] uppercase mb-3">Knowledge Hub</p>
          <h1 className="font-display text-5xl font-bold mb-3">Health & Nutrition Blog</h1>
          <div className="h-0.5 w-12 bg-[#D4AF37] mx-auto mb-4" />
          <p className="text-white/70 max-w-xl mx-auto">Expert guides on nut nutrition, healthy recipes, and the rich culture of Chitral's premium produce.</p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Featured */}
        <div className="mb-10">
          <Link href={`/blog/${BLOG_POSTS[0].slug}`} className="group block">
            <div className="bg-white rounded-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow md:flex">
              <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-[#1B4332]/20 to-[#D4AF37]/10 flex items-center justify-center text-8xl">
                🌿
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">{BLOG_POSTS[0].category} · Featured</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1B4332] group-hover:text-[#D4AF37] transition-colors mb-3">{BLOG_POSTS[0].title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{BLOG_POSTS[0].excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <span>By {BLOG_POSTS[0].author}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{BLOG_POSTS[0].readTime} min read</span>
                  <span>{BLOG_POSTS[0].date}</span>
                </div>
                <span className="text-[#1B4332] font-medium text-sm flex items-center gap-1 group-hover:text-[#D4AF37] transition-colors">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(1).concat(BLOG_POSTS).slice(0, 6).map((post, i) => (
            <Link key={i} href={`/blog/${post.slug}`} className="group">
              <div className="bg-white rounded-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-[#1B4332]/10 to-[#D4AF37]/10 flex items-center justify-center text-7xl relative">
                  {post.category === "Health" ? "🌿" : post.category === "Culture" ? "🏔️" : post.category === "Recipes" ? "🍽️" : "📦"}
                  <div className="absolute top-3 left-3">
                    <span className="text-xs bg-[#1B4332] text-white px-2 py-1 rounded-sm font-medium">{post.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime} min</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-serif font-semibold text-gray-800 mb-2 group-hover:text-[#1B4332] transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">By {post.author}</span>
                    <span className="text-[#1B4332] text-xs font-medium flex items-center gap-1 group-hover:text-[#D4AF37] transition-colors">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
