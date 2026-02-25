// src/app/robots.ts
import { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/getBaseUrl";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}