"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard, Package, ShoppingBag, Users, Tag, BarChart2,
  Settings, TrendingUp, TrendingDown, DollarSign, Eye, Plus, Search,
  ArrowUpRight, Star
} from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

const NAV = [
  { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
  { id: "products", label: "Products", icon: <Package className="w-4 h-4" /> },
  { id: "orders", label: "Orders", icon: <ShoppingBag className="w-4 h-4" /> },
  { id: "customers", label: "Customers", icon: <Users className="w-4 h-4" /> },
  { id: "coupons", label: "Coupons", icon: <Tag className="w-4 h-4" /> },
  { id: "analytics", label: "Analytics", icon: <BarChart2 className="w-4 h-4" /> },
  { id: "settings", label: "Settings", icon: <Settings className="w-4 h-4" /> },
];

const MOCK_ORDERS = [
  { id: "CNN-240001", customer: "Ayesha Rahman", city: "Karachi", amount: 4200, status: "Delivered", date: "Dec 10", items: 3 },
  { id: "CNN-240002", customer: "Hassan Ali", city: "Lahore", amount: 2800, status: "Shipped", date: "Dec 9", items: 2 },
  { id: "CNN-240003", customer: "Sara Khan", city: "Islamabad", amount: 6500, status: "Processing", date: "Dec 9", items: 4 },
  { id: "CNN-240004", customer: "Imran Shah", city: "Peshawar", amount: 3100, status: "Pending", date: "Dec 8", items: 2 },
  { id: "CNN-240005", customer: "Fatima Malik", city: "Multan", amount: 1800, status: "Delivered", date: "Dec 7", items: 1 },
];

const STATUS_COLORS: Record<string, string> = {
  Delivered: "bg-green-100 text-green-700",
  Shipped: "bg-blue-100 text-blue-700",
  Processing: "bg-yellow-100 text-yellow-700",
  Pending: "bg-gray-100 text-gray-600",
  Cancelled: "bg-red-100 text-red-600",
};

export default function AdminPage() {
  const [active, setActive] = useState("dashboard");
  const [productSearch, setProductSearch] = useState("");

  const filteredProducts = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(productSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-60 bg-[#0D2818] text-white flex flex-col flex-shrink-0 sticky top-0 h-screen">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#D4AF37] rounded-sm flex items-center justify-center text-[#0D2818] font-bold font-display">C</div>
            <div>
              <p className="font-display font-bold text-sm leading-tight">Chitral Nuts</p>
              <p className="text-white/40 text-[10px]">Admin Panel</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
          {NAV.map((item) => (
            <button key={item.id} onClick={() => setActive(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium transition-colors ${active === item.id ? "bg-[#D4AF37] text-[#0D2818]" : "text-white/70 hover:bg-white/10 hover:text-white"}`}>
              {item.icon}{item.label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-white/10">
          <Link href="/" className="flex items-center gap-2 text-white/50 hover:text-white text-xs px-3 py-2 transition-colors">
            <Eye className="w-3.5 h-3.5" /> View Store
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <h1 className="font-serif font-semibold text-gray-800 text-lg capitalize">{active}</h1>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1B4332] text-[#D4AF37] rounded-full flex items-center justify-center font-bold text-sm">A</div>
          </div>
        </div>

        <div className="p-6">
          {/* ─── DASHBOARD ─── */}
          {active === "dashboard" && (
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Total Revenue", value: "Rs. 2.4M", change: "+18%", up: true, icon: <DollarSign className="w-5 h-5" />, color: "bg-[#1B4332] text-white" },
                  { label: "Total Orders", value: "847", change: "+12%", up: true, icon: <ShoppingBag className="w-5 h-5" />, color: "bg-[#D4AF37] text-[#0D2818]" },
                  { label: "Customers", value: "1,234", change: "+8%", up: true, icon: <Users className="w-5 h-5" />, color: "bg-blue-500 text-white" },
                  { label: "Products", value: "24", change: "+3", up: true, icon: <Package className="w-5 h-5" />, color: "bg-purple-500 text-white" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-sm border border-gray-100 p-5">
                    <div className={`w-10 h-10 rounded-sm ${s.color} flex items-center justify-center mb-4`}>{s.icon}</div>
                    <p className="font-display text-2xl font-bold text-gray-800">{s.value}</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-gray-500">{s.label}</p>
                      <span className={`text-xs font-semibold flex items-center gap-0.5 ${s.up ? "text-green-600" : "text-red-500"}`}>
                        {s.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}{s.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Orders + Top Products */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2 bg-white rounded-sm border border-gray-100">
                  <div className="flex items-center justify-between p-5 border-b border-gray-100">
                    <h3 className="font-serif font-semibold text-gray-800">Recent Orders</h3>
                    <button onClick={() => setActive("orders")} className="text-xs text-[#1B4332] hover:underline flex items-center gap-1">View all <ArrowUpRight className="w-3 h-3" /></button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase tracking-wider">
                          {["Order", "Customer", "Amount", "Status", "Date"].map((h) => (
                            <th key={h} className="text-left px-5 py-3 font-medium">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {MOCK_ORDERS.map((o) => (
                          <tr key={o.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-5 py-3 font-medium text-[#1B4332]">{o.id}</td>
                            <td className="px-5 py-3 text-gray-700">{o.customer}</td>
                            <td className="px-5 py-3 font-semibold">Rs. {o.amount.toLocaleString()}</td>
                            <td className="px-5 py-3">
                              <span className={`text-[10px] px-2 py-1 rounded-sm font-semibold ${STATUS_COLORS[o.status]}`}>{o.status}</span>
                            </td>
                            <td className="px-5 py-3 text-gray-400 text-xs">{o.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white rounded-sm border border-gray-100">
                  <div className="p-5 border-b border-gray-100">
                    <h3 className="font-serif font-semibold text-gray-800">Top Products</h3>
                  </div>
                  <div className="p-4 space-y-3">
                    {PRODUCTS.filter(p => p.isFeatured).slice(0, 5).map((p) => (
                      <div key={p.id} className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-[#FAF9F6] rounded-sm flex items-center justify-center text-xl flex-shrink-0">🥜</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-gray-800 truncate">{p.name}</p>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-brand-gold text-[#D4AF37]" />
                            <span className="text-[10px] text-gray-400">{p.rating} ({p.reviewCount})</span>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-[#1B4332]">Rs. {p.price.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ─── PRODUCTS ─── */}
          {active === "products" && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input value={productSearch} onChange={(e) => setProductSearch(e.target.value)}
                    placeholder="Search products..." className="pl-9 pr-4 py-2 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-[#1B4332] w-60" />
                </div>
                <button className="flex items-center gap-2 bg-[#1B4332] text-white px-4 py-2 rounded-sm text-sm font-medium hover:bg-[#2D6A4F] transition-colors">
                  <Plus className="w-4 h-4" /> Add Product
                </button>
              </div>

              <div className="bg-white rounded-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase tracking-wider bg-gray-50">
                      {["Product", "SKU", "Category", "Price", "Stock", "Rating", "Status", "Actions"].map((h) => (
                        <th key={h} className="text-left px-4 py-3 font-medium">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredProducts.map((p) => (
                      <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#FAF9F6] rounded-sm flex items-center justify-center text-xl flex-shrink-0">🥜</div>
                            <span className="font-medium text-gray-800 text-xs">{p.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-gray-400 text-xs">{p.sku}</td>
                        <td className="px-4 py-3"><span className="text-xs bg-[#1B4332]/10 text-[#1B4332] px-2 py-0.5 rounded-sm">{p.category}</span></td>
                        <td className="px-4 py-3 font-semibold text-[#1B4332] text-xs">Rs. {p.price.toLocaleString()}</td>
                        <td className="px-4 py-3">
                          <span className={`text-xs font-medium ${p.stock < 10 ? "text-orange-500" : "text-green-600"}`}>{p.stock} units</span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-brand-gold text-[#D4AF37]" />
                            <span className="text-xs">{p.rating}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`text-[10px] px-2 py-1 rounded-sm font-semibold ${"stock" in p && (p as any).isActive !== false ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                            {(p as any).isActive !== false ? "Active" : "Draft"}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <button className="text-xs text-[#1B4332] hover:underline">Edit</button>
                            <button className="text-xs text-red-400 hover:underline">Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ─── ORDERS ─── */}
          {active === "orders" && (
            <div className="bg-white rounded-sm border border-gray-100 overflow-hidden">
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-serif font-semibold text-gray-800">All Orders</h3>
                <div className="flex gap-2">
                  {["All", "Pending", "Processing", "Shipped", "Delivered"].map((s) => (
                    <button key={s} className="text-xs px-3 py-1.5 rounded-sm border border-gray-200 hover:border-[#1B4332] hover:text-[#1B4332] transition-colors">{s}</button>
                  ))}
                </div>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase tracking-wider bg-gray-50">
                    {["Order ID", "Customer", "City", "Items", "Amount", "Status", "Date", "Actions"].map((h) => (
                      <th key={h} className="text-left px-5 py-3 font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {MOCK_ORDERS.map((o) => (
                    <tr key={o.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-3 font-medium text-[#1B4332]">{o.id}</td>
                      <td className="px-5 py-3 text-gray-700 font-medium">{o.customer}</td>
                      <td className="px-5 py-3 text-gray-500 text-xs">{o.city}</td>
                      <td className="px-5 py-3 text-gray-500 text-xs">{o.items} items</td>
                      <td className="px-5 py-3 font-bold text-gray-800">Rs. {o.amount.toLocaleString()}</td>
                      <td className="px-5 py-3">
                        <span className={`text-[10px] px-2 py-1 rounded-sm font-semibold ${STATUS_COLORS[o.status]}`}>{o.status}</span>
                      </td>
                      <td className="px-5 py-3 text-gray-400 text-xs">{o.date}</td>
                      <td className="px-5 py-3">
                        <div className="flex gap-2">
                          <button className="text-xs text-[#1B4332] hover:underline">View</button>
                          <button className="text-xs text-blue-500 hover:underline">Update</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* ─── ANALYTICS ─── */}
          {active === "analytics" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "This Month Revenue", value: "Rs. 485,000", change: "+24%" },
                  { label: "New Customers", value: "143", change: "+15%" },
                  { label: "Avg. Order Value", value: "Rs. 2,850", change: "+8%" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-sm border border-gray-100 p-5">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{s.label}</p>
                    <p className="font-display text-2xl font-bold text-[#1B4332]">{s.value}</p>
                    <p className="text-xs text-green-600 font-medium mt-1">↑ {s.change} vs last month</p>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-sm border border-gray-100 p-6">
                <h3 className="font-serif font-semibold text-gray-800 mb-5">Revenue by Category</h3>
                <div className="space-y-3">
                  {[
                    { name: "Pine Nuts (Chilgoza)", pct: 32, revenue: "Rs. 155,200" },
                    { name: "Almonds", pct: 22, revenue: "Rs. 106,700" },
                    { name: "Walnuts", pct: 18, revenue: "Rs. 87,300" },
                    { name: "Mixed Nuts", pct: 14, revenue: "Rs. 67,900" },
                    { name: "Dried Fruits", pct: 9, revenue: "Rs. 43,650" },
                    { name: "Honey", pct: 5, revenue: "Rs. 24,250" },
                  ].map((c) => (
                    <div key={c.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700 font-medium">{c.name}</span>
                        <span className="text-gray-500">{c.revenue} ({c.pct}%)</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#1B4332] rounded-full" style={{ width: `${c.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ─── SETTINGS ─── */}
          {active === "settings" && (
            <div className="max-w-2xl space-y-5">
              <div className="bg-white rounded-sm border border-gray-100 p-6">
                <h3 className="font-serif font-semibold text-gray-800 mb-5">Store Settings</h3>
                <div className="space-y-4">
                  {[
                    { label: "Store Name", value: "Chitral Natural Nuts" },
                    { label: "Store Email", value: "hello@chitralnuts.pk" },
                    { label: "Phone / WhatsApp", value: "+92-xxx-xxxxxxx" },
                    { label: "Free Shipping Threshold", value: "2000" },
                    { label: "Currency", value: "PKR (Rs.)" },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">{f.label}</label>
                      <input defaultValue={f.value} className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4332]" />
                    </div>
                  ))}
                  <button className="bg-[#1B4332] text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-[#2D6A4F] transition-colors">Save Settings</button>
                </div>
              </div>
            </div>
          )}

          {/* ─── CUSTOMERS ─── */}
          {active === "customers" && (
            <div className="bg-white rounded-sm border border-gray-100 overflow-hidden">
              <div className="p-5 border-b border-gray-100">
                <h3 className="font-serif font-semibold text-gray-800">Customers ({1234})</h3>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase tracking-wider bg-gray-50">
                    {["Customer", "Email", "City", "Orders", "Total Spent", "Joined"].map((h) => (
                      <th key={h} className="text-left px-5 py-3 font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { name: "Ayesha Rahman", email: "ayesha@gmail.com", city: "Karachi", orders: 7, spent: 28000, joined: "Nov 2024" },
                    { name: "Hassan Ali", email: "hassan@gmail.com", city: "Lahore", orders: 4, spent: 16500, joined: "Oct 2024" },
                    { name: "Sara Khan", email: "sara@gmail.com", city: "Islamabad", orders: 12, spent: 45200, joined: "Aug 2024" },
                    { name: "Imran Shah", email: "imran@gmail.com", city: "Peshawar", orders: 3, spent: 9800, joined: "Dec 2024" },
                  ].map((c) => (
                    <tr key={c.email} className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-[#1B4332] text-[#D4AF37] rounded-full flex items-center justify-center text-xs font-bold">{c.name[0]}</div>
                          <span className="font-medium text-gray-800">{c.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3 text-gray-400 text-xs">{c.email}</td>
                      <td className="px-5 py-3 text-gray-500 text-xs">{c.city}</td>
                      <td className="px-5 py-3"><span className="bg-[#1B4332]/10 text-[#1B4332] text-xs px-2 py-0.5 rounded-sm font-medium">{c.orders}</span></td>
                      <td className="px-5 py-3 font-semibold text-[#1B4332] text-xs">Rs. {c.spent.toLocaleString()}</td>
                      <td className="px-5 py-3 text-gray-400 text-xs">{c.joined}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* ─── COUPONS ─── */}
          {active === "coupons" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-serif font-semibold text-gray-800">Discount Coupons</h3>
                <button className="flex items-center gap-2 bg-[#1B4332] text-white px-4 py-2 rounded-sm text-sm font-medium hover:bg-[#2D6A4F] transition-colors">
                  <Plus className="w-4 h-4" /> Create Coupon
                </button>
              </div>
              <div className="bg-white rounded-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase tracking-wider bg-gray-50">
                      {["Code", "Type", "Value", "Min. Order", "Used", "Expires", "Status"].map((h) => (
                        <th key={h} className="text-left px-5 py-3 font-medium">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      { code: "SAVE10", type: "Percentage", value: "10%", min: "Rs. 1,000", used: 47, expires: "Dec 31, 2024", active: true },
                      { code: "WELCOME15", type: "Percentage", value: "15%", min: "Rs. 1,500", used: 23, expires: "Jan 31, 2025", active: true },
                      { code: "FREESHIP", type: "Free Shipping", value: "100%", min: "Rs. 500", used: 89, expires: "Dec 25, 2024", active: true },
                      { code: "FLAT200", type: "Fixed", value: "Rs. 200", min: "Rs. 2,000", used: 12, expires: "Dec 15, 2024", active: false },
                    ].map((c) => (
                      <tr key={c.code} className="hover:bg-gray-50 transition-colors">
                        <td className="px-5 py-3"><span className="font-mono font-bold text-[#1B4332] bg-[#1B4332]/5 px-2 py-1 rounded-sm text-xs">{c.code}</span></td>
                        <td className="px-5 py-3 text-gray-600 text-xs">{c.type}</td>
                        <td className="px-5 py-3 font-semibold text-gray-800 text-xs">{c.value}</td>
                        <td className="px-5 py-3 text-gray-500 text-xs">{c.min}</td>
                        <td className="px-5 py-3 text-gray-500 text-xs">{c.used}×</td>
                        <td className="px-5 py-3 text-gray-400 text-xs">{c.expires}</td>
                        <td className="px-5 py-3"><span className={`text-[10px] px-2 py-1 rounded-sm font-semibold ${c.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>{c.active ? "Active" : "Expired"}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
