import React from "react";
import Link from "next/link";
import { Mountain, Leaf, Heart, Award, Users, Globe } from "lucide-react";

export const metadata = { title: "About Us — Our Mountain Heritage", description: "Learn about Chitral Natural Nuts — our story, mission, and commitment to sourcing the finest nuts directly from the mountains of Chitral, Pakistan." };

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0D2818] via-[#1B4332] to-[#2D6A4F] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 mountain-pattern opacity-10" />
        <div className="container-custom relative z-10 text-center">
          <p className="text-[#D4AF37] text-sm font-medium tracking-[0.2em] uppercase mb-3">Our Story</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Born in the Mountains<br /><span className="text-[#D4AF37] italic">of Chitral</span></h1>
          <div className="h-0.5 w-16 bg-[#D4AF37] mx-auto mb-5" />
          <p className="text-white/75 max-w-2xl mx-auto text-base leading-relaxed">
            A story of heritage, purity, and a passion for bringing the finest natural foods from Chitral's pristine valleys to your family's table.
          </p>
        </div>
      </div>

      {/* Story section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#D4AF37] font-medium text-sm tracking-[0.2em] uppercase mb-3">The Beginning</p>
              <h2 className="font-display text-4xl font-bold text-[#1B4332] mb-5">A Family Tradition<br />Turned Into a Mission</h2>
              <div className="h-0.5 w-12 bg-[#D4AF37] mb-6" />
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>Chitral Natural Nuts was founded with a simple but powerful idea: the people of Pakistan deserve access to the same premium quality nuts that Chitral's mountains have been producing for centuries — without compromise.</p>
                <p>Growing up in Chitral, our founder witnessed firsthand the incredible quality of locally grown almonds, walnuts, and the rare Chilgoza pine nuts. Yet, by the time these products reached the markets in Karachi, Lahore, or Islamabad, they had often lost their freshness and natural goodness through long supply chains.</p>
                <p>We set out to change that. By working directly with over 500 farming families in Chitral, we've eliminated middlemen and created a direct supply chain from mountain harvest to your doorstep — ensuring maximum freshness, authentic flavor, and fair prices for our farming communities.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "🏔️", title: "Mountain Origin", desc: "2,500m altitude in Hindu Kush" },
                { emoji: "👨‍🌾", title: "500+ Farmers", desc: "Direct from local families" },
                { emoji: "🌿", title: "100% Natural", desc: "No chemicals, no additives" },
                { emoji: "🚚", title: "Fresh Delivery", desc: "Direct to your door" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-sm border border-gray-100 p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h3 className="font-serif font-semibold text-[#1B4332] text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#1B4332] text-white relative overflow-hidden">
        <div className="absolute inset-0 mountain-pattern opacity-10" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white/5 border border-white/10 rounded-sm p-8">
              <Heart className="w-10 h-10 text-[#D4AF37] mb-4" />
              <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
              <div className="h-0.5 w-10 bg-[#D4AF37] mb-4" />
              <p className="text-white/70 text-sm leading-relaxed">To bring the purest, most nutritious foods from Chitral's mountains directly to Pakistani families — while empowering farming communities, preserving traditional agricultural practices, and making premium natural foods accessible across Pakistan.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-sm p-8">
              <Globe className="w-10 h-10 text-[#D4AF37] mb-4" />
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <div className="h-0.5 w-10 bg-[#D4AF37] mb-4" />
              <p className="text-white/70 text-sm leading-relaxed">To become Pakistan's most trusted premium natural foods brand, establishing Chitral as a globally recognized origin for the world's finest nuts and dry fruits — while creating sustainable livelihoods for thousands of mountain farming families.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] font-medium text-sm tracking-[0.2em] uppercase mb-3">What Drives Us</p>
            <h2 className="font-display text-4xl font-bold text-[#1B4332] mb-4">Our Core Values</h2>
            <div className="h-0.5 w-12 bg-[#D4AF37] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Leaf className="w-8 h-8" />, title: "Purity", desc: "We never compromise on natural integrity. Every product is free from artificial preservatives, colors, and additives." },
              { icon: <Mountain className="w-8 h-8" />, title: "Authenticity", desc: "Our products are genuinely sourced from Chitral, where the geography and climate create uniquely superior quality." },
              { icon: <Users className="w-8 h-8" />, title: "Community", desc: "Every purchase you make directly supports farming families in Chitral, contributing to their prosperity and sustainable futures." },
              { icon: <Award className="w-8 h-8" />, title: "Quality", desc: "We hand-select every batch and maintain strict quality standards from farm to packaging to delivery." },
              { icon: <Heart className="w-8 h-8" />, title: "Health", desc: "We are passionate about promoting healthy eating through the most nutritious natural superfoods on earth." },
              { icon: <Globe className="w-8 h-8" />, title: "Sustainability", desc: "We support traditional, sustainable farming practices that have nurtured Chitral's ecosystems for centuries." },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-sm border border-gray-100 p-6 hover:shadow-md hover:-translate-y-1 transition-all group">
                <div className="text-[#D4AF37] group-hover:scale-110 transition-transform inline-block mb-4">{v.icon}</div>
                <h3 className="font-serif font-semibold text-[#1B4332] text-lg mb-2">{v.title}</h3>
                <div className="h-0.5 w-8 bg-[#D4AF37] mb-3" />
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="section-padding bg-[#F0EDE6]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-[#1B4332] mb-4">Our Sourcing Process</h2>
            <div className="h-0.5 w-12 bg-[#D4AF37] mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Harvest", icon: "🌳", desc: "Hand-picked at peak ripeness by local farmers" },
              { step: "02", title: "Sort", icon: "👐", desc: "Carefully sorted by hand for size and quality" },
              { step: "03", title: "Clean", icon: "✨", desc: "Cleaned with pure mountain spring water" },
              { step: "04", title: "Pack", icon: "📦", desc: "Vacuum-sealed to lock in freshness" },
              { step: "05", title: "Deliver", icon: "🚚", desc: "Express shipped directly to your door" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 bg-[#1B4332] text-[#D4AF37] rounded-full flex items-center justify-center text-2xl mx-auto mb-3 shadow-md">{s.icon}</div>
                <div className="text-[10px] text-[#D4AF37] font-bold tracking-wider">{s.step}</div>
                <h4 className="font-serif font-semibold text-[#1B4332] text-sm mt-0.5 mb-1">{s.title}</h4>
                <p className="text-xs text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1B4332] text-center">
        <div className="container-custom">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Taste the Chitral Difference</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">Experience premium quality nuts and dry fruits sourced directly from the mountains of Chitral.</p>
          <Link href="/shop" className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0D2818] font-semibold px-8 py-4 rounded-sm hover:bg-[#E8CC6A] transition-colors text-base">
            Shop Now →
          </Link>
        </div>
      </section>
    </div>
  );
}
