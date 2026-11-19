import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const lastModified = new Date("2026-11-18");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/lead-packages", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms-and-conditions", priority: 0.2, changeFrequency: "yearly" },
    { path: "/refund-replacement-policy", priority: 0.2, changeFrequency: "yearly" },
  ];
  return routes.map((r) => ({ url: `${site.url}${r.path}`, lastModified, changeFrequency: r.changeFrequency, priority: r.priority }));
}
