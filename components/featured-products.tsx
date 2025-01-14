import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  sectionClasses,
  containerClasses,
  headingClasses,
} from "@/styles/shared";
import { ProductsData } from "@/constants/data";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";


export function FeaturedProducts() {

const handleAddToCart = (id: number) => {
    // Add product to cart
    console.log("Product added to cart:", id);
  };


  return (
    <section id="featured-products" className={sectionClasses}>
      <div className={containerClasses}>
        <h2 className={headingClasses}>Featured Products</h2>
        <div className=" grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ProductsData.slice(0, 8).map((product) => (
             <ProductCard
                key={product.id}
                {...product}
                onAddToCart={handleAddToCart}
              />
          ))}
        </div>
      </div>
    </section>
  );
}
