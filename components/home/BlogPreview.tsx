import React from "react";
import Link from "next/link";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";

export default function BlogPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[#D4AF37] font-medium text-sm tracking-[0.2em] uppercase mb-2">Knowledge Hub</p>
            <h2 className="font-display text-4xl font-bold text-[#1B4332]">Health & Nutrition Blog</h2>
          </div>
          <Link href="/blog" className="text-[#1B4332] font-medium text-sm flex items-center gap-1 hover:text-[#D4AF37] transition-colors group whitespace-nowrap">
            All Articles <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {BLOG_POSTS.map((post, i) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <div className="bg-[#FAF9F6] rounded-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="h-44 bg-gradient-to-br from-[#1B4332]/10 to-[#D4AF37]/10 flex items-center justify-center relative overflow-hidden">
                  <span className="text-6xl">
                    {post.category === "Health" ? "🌿" : post.category === "Culture" ? "🏔️" : post.category === "Recipes" ? "🍽️" : "📦"}
                  </span>
                  <div className="absolute top-3 left-3">
                    <span className="text-xs bg-[#1B4332] text-white px-2 py-1 rounded-sm font-medium">{post.category}</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime} min read</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-serif font-semibold text-gray-800 text-sm leading-snug mb-2 group-hover:text-[#1B4332] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">{post.excerpt}</p>
                  <div className="mt-3 flex items-center gap-1 text-[#1B4332] text-xs font-medium">
                    Read more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
