import type { MetadataRoute } from "next";

/**
 * Generate robots.txt for search engine crawlers
 * Defines which pages can be crawled and provides sitemap location
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
    ],
    sitemap: "https://convertcase.net/sitemap.xml",
  };
}
