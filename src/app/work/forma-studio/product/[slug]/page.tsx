import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/forma/ProductDetail";
import { formaProducts, getProductBySlug } from "@/lib/forma-content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return formaProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product | FORMA Studio" };
  return {
    title: `${product.name} | FORMA Studio`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
