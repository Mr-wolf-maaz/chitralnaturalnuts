import React from "react";
import Link from "next/link";
import { Clock, ArrowLeft, Tag, User, Calendar, Share2, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((b) => b.slug === params.slug) || BLOG_POSTS[0];
  const related = BLOG_POSTS.filter((b) => b.slug !== params.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0D2818] via-[#1B4332] to-[#2D6A4F] text-white py-20 relative overflow-hidden">
        <div className="mountain-pattern absolute inset-0 opacity-10" />
        <div className="container-custom relative z-10 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4AF37] text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="bg-[#D4AF37] text-[#0D2818] text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">{post.category}</span>
            {post.tags.map((t) => (
              <span key={t} className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-5 text-white/60 text-sm">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime} min read</span>
          </div>
        </div>
      </div>

      {/* Featured image placeholder */}
      <div className="container-custom max-w-4xl -mt-8 relative z-10 mb-10">
        <div className="h-64 md:h-80 bg-gradient-to-br from-[#1B4332]/10 to-[#D4AF37]/10 rounded-sm border border-white shadow-xl flex items-center justify-center text-8xl">
          {post.category === "Health" ? "🌿" : post.category === "Culture" ? "🏔️" : post.category === "Recipes" ? "🍽️" : "📦"}
        </div>
      </div>

      {/* Content */}
      <div className="container-custom max-w-4xl pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Article */}
          <article className="lg:col-span-2 bg-white rounded-sm border border-gray-100 p-8">
            <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-[#D4AF37] pl-4 mb-8 font-serif italic">{post.excerpt}</p>

            <div className="prose max-w-none text-gray-700 text-sm leading-[1.9] space-y-5">
              <p>Nestled high in the Hindu Kush mountains of northern Pakistan, Chitral has long been revered as one of Asia's most pristine natural landscapes. At elevations exceeding 2,500 meters above sea level, the region's unique combination of glacial meltwater, intense ultraviolet sunlight, and mineral-rich mountain soil creates growing conditions that simply cannot be replicated elsewhere.</p>

              <h2 className="font-display text-2xl font-bold text-[#1B4332] mt-8 mb-4">The Science Behind the Quality</h2>
              <p>Research published in nutritional science journals has consistently shown that nuts grown at high altitudes contain significantly higher concentrations of beneficial compounds. The stress of the harsh mountain environment triggers the production of protective antioxidants — a phenomenon scientists call "hormesis." For you, the consumer, this means every bite of Chitral nuts delivers a more concentrated nutritional punch.</p>

              <p>The cold mountain nights and warm days create ideal conditions for slow, even ripening. This extended maturation period allows the nuts to develop complex flavor compounds and denser nutritional profiles. Compare this to commercially farmed nuts grown in artificial conditions — the difference is immediately apparent in both taste and nutrition.</p>

              <h2 className="font-display text-2xl font-bold text-[#1B4332] mt-8 mb-4">Traditional Farming Wisdom</h2>
              <p>For centuries, Chitrali farmers have practiced a form of natural agriculture that modern scientists are only now beginning to understand. The traditional practice of intercropping — growing multiple plant species together — naturally controls pests and enriches the soil, eliminating any need for chemical inputs.</p>

              <p>The walnut trees of Chitral, many of which are over 100 years old, have developed deep root systems that access underground mineral deposits inaccessible to younger, commercially farmed trees. This gives Chitral walnuts their distinctive earthy, complex flavor and exceptional mineral content.</p>

              <div className="bg-[#FAF9F6] rounded-sm p-6 my-6 border border-gray-100">
                <h3 className="font-serif font-bold text-[#1B4332] mb-3">Key Nutritional Highlights</h3>
                <ul className="space-y-2">
                  {["30% higher Vitamin E content vs. conventionally grown nuts", "Rich in Omega-3 fatty acids (particularly in walnuts)", "Natural source of Magnesium, Zinc, and Selenium", "High antioxidant capacity from high-altitude UV stress", "No artificial preservatives — naturally shelf-stable"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#D4AF37] mt-0.5">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-[#1B4332] mt-8 mb-4">From Harvest to Your Home</h2>
              <p>At Chitral Natural Nuts, we've built a supply chain that preserves every bit of this natural goodness. Our farmers harvest nuts at precisely the right moment of maturity. Within hours, the nuts are cleaned using glacial spring water, sorted by hand to remove any imperfect specimens, and vacuum-sealed to lock in freshness.</p>

              <p>We never use industrial drying methods that destroy heat-sensitive vitamins. Instead, we use traditional sun-drying techniques combined with gentle temperature-controlled storage. The result is a product that tastes like it was picked yesterday — because in many ways, nutritionally speaking, it was.</p>

              <h2 className="font-display text-2xl font-bold text-[#1B4332] mt-8 mb-4">How to Incorporate Them Into Your Daily Diet</h2>
              <p>The simplest way to experience the benefits is to eat a small handful (30g) of mixed nuts daily. Morning is ideal — the healthy fats and proteins provide sustained energy that keeps blood sugar stable through the day.</p>

              <p>For families, consider replacing processed snacks with a premium nut mix. Children who grow up eating real, nutritious foods develop better taste preferences and are less likely to crave empty-calorie junk food in adulthood. This is one of the most important investments you can make in your family's health.</p>
            </div>

            {/* Author bio */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex gap-4">
              <div className="w-14 h-14 bg-[#1B4332] text-[#D4AF37] rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                {post.author[0]}
              </div>
              <div>
                <p className="font-serif font-semibold text-gray-800">{post.author}</p>
                <p className="text-xs text-gray-400 mt-0.5">Nutritionist & Wellness Expert</p>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">A certified nutritionist with 10+ years of experience in mountain food systems and natural nutrition. Regular contributor to health journals across South Asia.</p>
              </div>
            </div>

            {/* Share */}
            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-3">
              <span className="text-sm text-gray-500 font-medium">Share this article:</span>
              {["Facebook", "Twitter", "WhatsApp", "LinkedIn"].map((s) => (
                <a key={s} href="#" className="text-xs bg-gray-100 hover:bg-[#1B4332] hover:text-white text-gray-600 px-3 py-1.5 rounded-sm transition-colors">{s}</a>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5">
            {/* Newsletter */}
            <div className="bg-[#1B4332] text-white rounded-sm p-5">
              <h3 className="font-serif font-semibold mb-2">📬 Get Health Tips</h3>
              <p className="text-white/65 text-xs mb-4">Subscribe for weekly nutrition tips and exclusive offers.</p>
              <input type="email" placeholder="Your email" className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-3 py-2 rounded-sm text-sm focus:outline-none focus:border-[#D4AF37] mb-2" />
              <button className="w-full bg-[#D4AF37] text-[#0D2818] font-semibold py-2 rounded-sm text-sm hover:bg-[#E8CC6A] transition-colors">Subscribe Free</button>
            </div>

            {/* Related articles */}
            <div className="bg-white rounded-sm border border-gray-100 p-5">
              <h3 className="font-serif font-semibold text-[#1B4332] mb-4">Related Articles</h3>
              <div className="space-y-4">
                {related.map((r) => (
                  <Link key={r.id} href={`/blog/${r.slug}`} className="group flex gap-3">
                    <div className="w-14 h-14 bg-[#FAF9F6] rounded-sm flex items-center justify-center text-2xl flex-shrink-0">
                      {r.category === "Health" ? "🌿" : r.category === "Culture" ? "🏔️" : "🍽️"}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-800 group-hover:text-[#1B4332] line-clamp-2 transition-colors leading-snug">{r.title}</p>
                      <p className="text-[10px] text-gray-400 mt-1 flex items-center gap-1"><Clock className="w-2.5 h-2.5" />{r.readTime} min</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Shop CTA */}
            <div className="bg-[#FAF9F6] border border-gray-200 rounded-sm p-5 text-center">
              <div className="text-4xl mb-2">🥜</div>
              <h3 className="font-serif font-semibold text-[#1B4332] text-sm mb-1">Shop Premium Nuts</h3>
              <p className="text-xs text-gray-500 mb-3">Sourced directly from Chitral mountains</p>
              <Link href="/shop" className="block bg-[#1B4332] text-white text-xs font-semibold py-2.5 rounded-sm hover:bg-[#2D6A4F] transition-colors">Shop Now →</Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
