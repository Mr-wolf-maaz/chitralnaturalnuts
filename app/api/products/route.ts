import { NextResponse } from "next/server";
import { PRODUCTS } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const sort = searchParams.get("sort") || "featured";
  const organic = searchParams.get("organic") === "true";

  let products = [...PRODUCTS];

  if (category && category !== "all") {
    products = products.filter((p) =>
      p.category.toLowerCase().replace(/\s+/g, "-") === category
    );
  }
  if (search) {
    products = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (organic) {
    products = products.filter((p) => p.isOrganic);
  }

  switch (sort) {
    case "price-asc": products.sort((a, b) => a.price - b.price); break;
    case "price-desc": products.sort((a, b) => b.price - a.price); break;
    case "rating": products.sort((a, b) => b.rating - a.rating); break;
    default: products.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
  }

  return NextResponse.json({ products, total: products.length });
}
