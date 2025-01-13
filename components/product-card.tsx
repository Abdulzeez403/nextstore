import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  discountedPrice?: number;
  images: string[];
  rating: number;
  onAddToCart: (id: number) => void;
}

export function ProductCard({
  id,
  title,
  price,
  discountedPrice,
  images,
  rating,
  onAddToCart,
}: ProductCardProps) {
  const discount = discountedPrice
    ? Math.round((1 - discountedPrice / price) * 100)
    : 0;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <Carousel
        autoplay={true}
        autoplayInterval={4000}
        transitionSpeed={300}
        showArrows={true}
        showDots={true}
      >
        {[
          images.length > 0 ? (
            images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))
          ) : (
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <div className="flex h-full items-center justify-center text-gray-400">
                No Image Available
              </div>
            </div>
          ),
        ]}
      </Carousel>
      {discount > 0 && (
        <div className="absolute left-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
          -{discount}%
        </div>
      )}
      <div className="flex flex-1 flex-col p-4">
        <Link
          href={`/products/${id}`}
          className="mb-2 text-sm font-medium text-gray-900 hover:text-primary sm:text-base"
        >
          {title}
        </Link>
        <div className="mb-2 flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.round(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
          <span className="ml-1 text-xs text-gray-500">
            ({rating.toFixed(1)})
          </span>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div>
            {discountedPrice ? (
              <>
                <span className="text-lg font-bold text-primary">
                  ${discountedPrice.toFixed(2)}
                </span>
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-primary">
                ${price.toFixed(2)}
              </span>
            )}
          </div>
          <Button
            size="sm"
            // onClick={() => onAddToCart(id)}
          >
            <Link href={`/products/${id}`}>Buy Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
