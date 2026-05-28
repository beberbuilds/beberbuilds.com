import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://beberbuilds.com";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/projects/xaubot-v2`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projects/zyn-consultancy`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projects/retail-business-management-erp`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/ai-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/saas-development`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/web-development`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/ai-chatbots`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/dashboards-tools`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookie-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
