"use client";
import React, { useState } from "react";
import { User, Package, Heart, MapPin, Settings, LogOut, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const TABS = [
  { id: "dashboard", label: "Dashboard", icon: <User className="w-4 h-4" /> },
  { id: "orders", label: "My Orders", icon: <Package className="w-4 h-4" /> },
  { id: "addresses", label: "Addresses", icon: <MapPin className="w-4 h-4" /> },
  { id: "settings", label: "Settings", icon: <Settings className="w-4 h-4" /> },
];

const MOCK_ORDERS = [
  { id: "CNN-240001", date: "Dec 10, 2024", status: "Delivered", total: 4200, items: 3 },
  { id: "CNN-240002", date: "Nov 25, 2024", status: "Shipped", total: 2800, items: 2 },
  { id: "CNN-240003", date: "Nov 10, 2024", status: "Delivered", total: 6500, items: 4 },
];

export default function AccountPage() {
  const [tab, setTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <div className="bg-[#1B4332] text-white py-12">
        <div className="container-custom flex items-center gap-5">
          <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-2xl font-bold text-[#0D2818]">A</div>
          <div>
            <h1 className="font-display text-3xl font-bold">Welcome, Ahmad!</h1>
            <p className="text-white/70 text-sm">ahmad@example.com</p>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="bg-white rounded-sm border border-gray-100 overflow-hidden">
              {TABS.map((t) => (
                <button key={t.id} onClick={() => setTab(t.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors border-l-2 ${tab === t.id ? "bg-[#1B4332]/5 border-[#1B4332] text-[#1B4332]" : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-[#1B4332]"}`}>
                  {t.icon}{t.label}
                </button>
              ))}
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 transition-colors border-t border-gray-100">
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1">
            {tab === "dashboard" && (
              <div className="space-y-5">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: "Total Orders", value: "12", icon: <Package className="w-6 h-6" />, color: "bg-blue-50 text-blue-600" },
                    { label: "Total Spent", value: "Rs. 45K", icon: <Star className="w-6 h-6" />, color: "bg-[#D4AF37]/10 text-[#A8892B]" },
                    { label: "Wishlist", value: "8", icon: <Heart className="w-6 h-6" />, color: "bg-red-50 text-red-500" },
                    { label: "Loyalty Points", value: "450", icon: <User className="w-6 h-6" />, color: "bg-[#1B4332]/10 text-[#1B4332]" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white rounded-sm border border-gray-100 p-5">
                      <div className={`w-10 h-10 rounded-sm ${s.color} flex items-center justify-center mb-3`}>{s.icon}</div>
                      <p className="font-display text-2xl font-bold text-gray-800">{s.value}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-sm border border-gray-100 p-5">
                  <h3 className="font-serif font-semibold text-[#1B4332] mb-4">Recent Orders</h3>
                  <div className="space-y-3">
                    {MOCK_ORDERS.slice(0, 3).map((o) => (
                      <div key={o.id} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                        <div>
                          <p className="font-medium text-sm text-gray-800">{o.id}</p>
                          <p className="text-xs text-gray-400">{o.date} · {o.items} items</p>
                        </div>
                        <div className="text-right">
                          <span className={`text-xs px-2 py-1 rounded-sm font-medium ${o.status === "Delivered" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>{o.status}</span>
                          <p className="text-sm font-bold text-[#1B4332] mt-1">Rs. {o.total.toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {tab === "orders" && (
              <div className="bg-white rounded-sm border border-gray-100">
                <div className="p-5 border-b border-gray-100">
                  <h2 className="font-serif font-semibold text-[#1B4332]">My Orders</h2>
                </div>
                <div className="divide-y divide-gray-50">
                  {MOCK_ORDERS.map((o) => (
                    <div key={o.id} className="p-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#FAF9F6] rounded-sm flex items-center justify-center text-2xl">📦</div>
                        <div>
                          <p className="font-semibold text-sm text-gray-800">{o.id}</p>
                          <p className="text-xs text-gray-400">{o.date} · {o.items} items</p>
                          <span className={`inline-block text-[10px] px-2 py-0.5 rounded-sm font-medium mt-1 ${o.status === "Delivered" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>{o.status}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[#1B4332]">Rs. {o.total.toLocaleString()}</p>
                        <button className="text-xs text-[#1B4332] hover:underline mt-1 flex items-center gap-0.5">
                          View <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === "addresses" && (
              <div className="bg-white rounded-sm border border-gray-100 p-6">
                <div className="flex justify-between items-center mb-5">
                  <h2 className="font-serif font-semibold text-[#1B4332]">Saved Addresses</h2>
                  <Button variant="outline" size="sm">+ Add Address</Button>
                </div>
                <div className="border-2 border-[#1B4332] rounded-sm p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs bg-[#1B4332] text-white px-2 py-0.5 rounded-sm font-medium">Default</span>
                      <p className="font-semibold text-gray-800 mt-2">Ahmad Ali</p>
                      <p className="text-sm text-gray-500 mt-1">House 12, Street 5, G-9/1<br />Islamabad, ICT, Pakistan</p>
                      <p className="text-sm text-gray-500">+92-xxx-xxxxxxx</p>
                    </div>
                    <button className="text-xs text-[#1B4332] hover:underline">Edit</button>
                  </div>
                </div>
              </div>
            )}

            {tab === "settings" && (
              <div className="bg-white rounded-sm border border-gray-100 p-6">
                <h2 className="font-serif font-semibold text-[#1B4332] mb-5">Account Settings</h2>
                <div className="space-y-4 max-w-md">
                  {[
                    { label: "Full Name", value: "Ahmad Ali", type: "text" },
                    { label: "Email Address", value: "ahmad@example.com", type: "email" },
                    { label: "Phone Number", value: "+92-xxx-xxxxxxx", type: "tel" },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">{f.label}</label>
                      <input defaultValue={f.value} type={f.type}
                        className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4332]" />
                    </div>
                  ))}
                  <Button variant="primary" size="md">Save Changes</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
