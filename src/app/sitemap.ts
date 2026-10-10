import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sunriseproperty.in";
  const routes = [
    "",
    "/about",
    "/real-estate",
    "/interior-design",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.includes("policy") || route.includes("terms") ? 0.3 : 0.8,
  }));
}
