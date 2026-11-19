import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Trimmed Leads",
    short_name: "Trimmed Leads",
    description: "Verified interior, architecture & construction leads with pre-scheduled meetings across India.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf8f3",
    theme_color: "#142033",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
