import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/admin/", "/api/", "/checkout/"] },
    sitemap: "https://chitralnuts.pk/sitemap.xml",
  };
}
