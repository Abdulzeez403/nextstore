import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  sectionClasses,
  containerClasses,
  headingClasses,
} from "@/styles/shared";
import { ProductsData } from "@/constants/data";
import Link from "next/link";

export function FeaturedProducts() {
  return (
    <section id="featured-products" className={sectionClasses}>
      <div className={containerClasses}>
        <h2 className={headingClasses}>Featured Products</h2>
        <div className="px-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-20">
          {ProductsData.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 ease-in-out hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 ease-in-out group-hover:text-primary">
                  {product.title}
                </h3>
                <p className="mb-4 flex-1 text-sm text-gray-600">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">
                    ${product.price.toFixed(2)}
                  </span>
                  <Link href={`/products/${product.id}`} passHref>
                    <Button
                      variant="outline"
                      size="sm"
                      className="transition-colors duration-300 ease-in-out hover:bg-primary hover:text-white"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
