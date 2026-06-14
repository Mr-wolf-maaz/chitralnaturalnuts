"use client";
import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <div className="bg-[#1B4332] text-white py-16">
        <div className="container-custom text-center">
          <p className="text-[#D4AF37] text-sm font-medium tracking-[0.2em] uppercase mb-3">Get in Touch</p>
          <h1 className="font-display text-5xl font-bold mb-3">Contact Us</h1>
          <div className="h-0.5 w-12 bg-[#D4AF37] mx-auto mb-4" />
          <p className="text-white/70 max-w-xl mx-auto">Have a question or need help with your order? We're here to help.</p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Info */}
          <div className="space-y-5">
            <div>
              <h2 className="font-display text-2xl font-bold text-[#1B4332] mb-5">We'd Love to Hear From You</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Whether you have a question about our products, an order concern, or just want to know more about our Chitral sourcing — our friendly team is ready to help.</p>
            </div>

            {[
              { icon: <MapPin className="w-5 h-5" />, title: "Visit Us", content: "Chitral Bazaar, Chitral City\nKhyber Pakhtunkhwa, Pakistan" },
              { icon: <Phone className="w-5 h-5" />, title: "Call / WhatsApp", content: "+92-xxx-xxxxxxx\nMon–Sat, 9am–6pm PKT" },
              { icon: <Mail className="w-5 h-5" />, title: "Email Us", content: "hello@chitralnuts.pk\nWe reply within 24 hours" },
              { icon: <Clock className="w-5 h-5" />, title: "Business Hours", content: "Monday – Saturday\n9:00 AM – 6:00 PM PKT" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-4 bg-white rounded-sm border border-gray-100 hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 bg-[#1B4332]/10 text-[#1B4332] rounded-sm flex items-center justify-center flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5 whitespace-pre-line">{item.content}</p>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a href="https://wa.me/92xxxxxxxxxx?text=Hi! I have a question about your products." target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-4 rounded-sm hover:bg-[#1da851] transition-colors shadow-md">
              <MessageCircle className="w-6 h-6" />
              <div>
                <p className="font-semibold text-sm">Chat on WhatsApp</p>
                <p className="text-white/80 text-xs">Usually replies within minutes</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {sent ? (
              <div className="bg-white rounded-sm border border-gray-100 p-10 text-center">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="font-display text-2xl font-bold text-[#1B4332] mb-2">Message Sent!</h3>
                <p className="text-gray-500 mb-6">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                <Button variant="primary" onClick={() => setSent(false)}>Send Another Message</Button>
              </div>
            ) : (
              <div className="bg-white rounded-sm border border-gray-100 p-8">
                <h3 className="font-serif font-semibold text-[#1B4332] text-xl mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Full Name *</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name" className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4332]" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Email Address *</label>
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com" className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4332]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Phone Number</label>
                      <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+92-xxx-xxxxxxx" className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4332]" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Subject *</label>
                      <select required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4332] bg-white">
                        <option value="">Select subject...</option>
                        <option>Product Inquiry</option>
                        <option>Order Status</option>
                        <option>Bulk / Wholesale</option>
                        <option>Complaint / Feedback</option>
                        <option>Partnership</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us how we can help..." className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4332] resize-none" />
                  </div>
                  <Button variant="gold" size="lg" type="submit" className="w-full">
                    <Send className="w-4 h-4" /> Send Message
                  </Button>
                </form>
              </div>
            )}

            {/* Map placeholder */}
            <div className="mt-5 bg-[#1B4332]/10 border border-[#1B4332]/20 rounded-sm h-48 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-10 h-10 text-[#1B4332] mx-auto mb-2" />
                <p className="text-[#1B4332] font-medium text-sm">Chitral, Khyber Pakhtunkhwa</p>
                <p className="text-gray-500 text-xs">Google Maps integration active in production</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
