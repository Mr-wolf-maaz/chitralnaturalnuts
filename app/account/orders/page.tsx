"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Package, ArrowLeft, Search, Filter, ChevronDown, ArrowRight } from "lucide-react";

const STATUS_COLORS: Record<string, string> = {
  Delivered: "bg-green-100 text-green-700",
  Shipped: "bg-blue-100 text-blue-700",
  Processing: "bg-yellow-100 text-yellow-700",
  Pending: "bg-gray-100 text-gray-600",
  Cancelled: "bg-red-100 text-red-600",
};

const ORDERS = [
  { id: "CNN-241210-0042", date: "Dec 10, 2024", status: "Delivered", total: 4200, items: [{ name: "Premium Almonds", qty: 2, price: 1800 }, { name: "Walnuts", qty: 1, price: 2200 }], tracking: "TCS-12345678", city: "Karachi" },
  { id: "CNN-241125-0031", date: "Nov 25, 2024", status: "Shipped", total: 2800, items: [{ name: "Pine Nuts (Chilgoza)", qty: 1, price: 4500 }], tracking: "LEOPARD-87654321", city: "Lahore" },
  { id: "CNN-241110-0019", date: "Nov 10, 2024", status: "Delivered", total: 6500, items: [{ name: "Mixed Premium Nuts", qty: 2, price: 2200 }, { name: "Mountain Honey", qty: 1, price: 2500 }], tracking: "TCS-11223344", city: "Islamabad" },
  { id: "CNN-240925-0008", date: "Sep 25, 2024", status: "Delivered", total: 3600, items: [{ name: "Dried Apricots", qty: 2, price: 1400 }, { name: "Pistachios", qty: 1, price: 3200 }], tracking: "DLVR-55667788", city: "Peshawar" },
];

export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [openOrder, setOpenOrder] = useState<string | null>(null);

  const filtered = ORDERS.filter((o) =>
    o.id.toLowerCase().includes(search.toLowerCase()) ||
    o.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <div className="bg-[#1B4332] text-white py-12">
        <div className="container-custom">
          <Link href="/account" className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4AF37] text-sm mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Account
          </Link>
          <h1 className="font-display text-4xl font-bold">My Orders</h1>
          <p className="text-white/60 mt-1">Track and manage all your orders</p>
        </div>
      </div>

      <div className="container-custom py-8 max-w-3xl">
        {/* Search */}
        <div className="relative mb-5">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by order ID or status..."
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-[#1B4332]" />
        </div>

        {/* Orders */}
        <div className="space-y-3">
          {filtered.map((order) => (
            <div key={order.id} className="bg-white rounded-sm border border-gray-100 overflow-hidden">
              {/* Header row */}
              <button
                onClick={() => setOpenOrder(openOrder === order.id ? null : order.id)}
                className="w-full p-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="w-10 h-10 bg-[#1B4332]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Package className="w-5 h-5 text-[#1B4332]" />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="font-mono font-bold text-[#1B4332] text-sm">{order.id}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{order.date} · {order.city}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="text-right hidden sm:block">
                    <p className="font-bold text-[#1B4332]">Rs. {order.total.toLocaleString()}</p>
                    <p className="text-xs text-gray-400">{order.items.length} item{order.items.length !== 1 ? "s" : ""}</p>
                  </div>
                  <span className={`text-[10px] px-2.5 py-1 rounded-sm font-semibold ${STATUS_COLORS[order.status]}`}>{order.status}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openOrder === order.id ? "rotate-180" : ""}`} />
                </div>
              </button>

              {/* Expanded detail */}
              {openOrder === order.id && (
                <div className="border-t border-gray-100 p-5 bg-gray-50">
                  <div className="divide-y divide-gray-200 mb-4">
                    {order.items.map((item, i) => (
                      <div key={i} className="py-3 flex justify-between text-sm">
                        <span className="text-gray-700 font-medium">{item.name} ×{item.qty}</span>
                        <span className="text-gray-500">Rs. {(item.price * item.qty).toLocaleString()}</span>
                      </div>
                    ))}
                    <div className="py-3 flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-[#1B4332]">Rs. {order.total.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Tracking */}
                  <div className="bg-white rounded-sm p-4 border border-gray-100 mb-3">
                    <p className="text-xs text-gray-500 mb-1">Tracking Number</p>
                    <p className="font-mono font-bold text-gray-800">{order.tracking}</p>
                    <div className="flex gap-2 mt-3">
                      {["Processing", "Shipped", "Delivered"].map((step, i) => {
                        const done = order.status === "Delivered" || (order.status === "Shipped" && i < 2) || (order.status === "Processing" && i < 1);
                        return (
                          <React.Fragment key={step}>
                            <div className={`flex items-center gap-1 text-xs font-medium ${done ? "text-green-600" : "text-gray-400"}`}>
                              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${done ? "border-green-500 bg-green-500" : "border-gray-300"}`}>
                                {done && <span className="text-white text-[8px]">✓</span>}
                              </div>
                              <span className="hidden sm:inline">{step}</span>
                            </div>
                            {i < 2 && <div className={`flex-1 h-0.5 self-center ${done ? "bg-green-400" : "bg-gray-200"}`} />}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {order.status === "Delivered" && (
                      <button className="text-xs bg-[#1B4332] text-white px-4 py-2 rounded-sm hover:bg-[#2D6A4F] transition-colors">
                        Write a Review
                      </button>
                    )}
                    <button className="text-xs bg-[#D4AF37] text-[#0D2818] font-semibold px-4 py-2 rounded-sm hover:bg-[#E8CC6A] transition-colors">
                      Reorder
                    </button>
                    {order.status === "Pending" && (
                      <button className="text-xs border border-red-300 text-red-500 px-4 py-2 rounded-sm hover:bg-red-50 transition-colors">
                        Cancel Order
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-16 bg-white rounded-sm border border-gray-100">
              <Package className="w-12 h-12 text-gray-200 mx-auto mb-3" />
              <p className="text-gray-500 font-serif">No orders found</p>
              <Link href="/shop" className="text-[#1B4332] text-sm font-medium mt-2 inline-block hover:underline">Start Shopping →</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
