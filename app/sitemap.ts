import type { MetadataRoute } from "next";
import { vehicles } from "./lib/vehicles";
import { destinations } from "./lib/destinations";

export const BASE_URL = "https://www.mariquinatravel.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const vehicleUrls: MetadataRoute.Sitemap = vehicles
    .filter((v) => v.page)
    .map((vehicle) => ({
      url: `${BASE_URL}/vehicles/${vehicle.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  const destinationUrls: MetadataRoute.Sitemap = destinations.map(
    (destination) => ({
      url: `${BASE_URL}/destinations/${destination.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...destinationUrls,
    ...vehicleUrls,
  ];
}
