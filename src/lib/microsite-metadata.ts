import type { Metadata } from "next";
import type { SeoMeta } from "@/lib/types/microsite";

export function buildMicrositeMetadata(
  seo: SeoMeta,
  siteName?: string,
): Metadata {
  const name = siteName ?? seo.siteName ?? seo.title;

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
      locale: "en_GB",
      siteName: name,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}
