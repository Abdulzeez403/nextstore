import { ProductDetailsPage } from "@/components/product-detail-page";

// This is a dynamic route, so we need to generate static params
export async function generateStaticParams() {
  // In a real application, you would fetch this data from an API or database
  const products = [1, 2, 3, 4, 5, 6]; // Example product IDs
  return products.map((id) => ({ id: id.toString() }));
}

export default function Page({ params }: { params: { id: string } }) {
  return <ProductDetailsPage productId={params.id} />;
}
