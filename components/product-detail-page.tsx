"use client";

import { useState, useEffect } from "react";
import { ImageGallery } from "@/components/image-gallery";
import { ProductInfo } from "@/components/product-info";
import { AddToCartSection } from "@/components/add-to-cart-section";
import { DescriptionReviewsTabs } from "@/components/description-reviews-tabs";
import { RelatedProducts } from "@/components/related-products";
import { Breadcrumb } from "@/components/breadcrumb";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Product {
  id: number;
  title: string;
  price: number;
  discountedPrice?: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  images: string[];
  sizes: string[];
  colors: string[];
  description: string;
  specifications: Record<string, string>;
  reviews: Array<{
    id: number;
    author: string;
    rating: number;
    comment: string;
    date: string;
  }>;
  sellerPhoneNumber: string;
}

export function ProductDetailsPage({ productId }: { productId: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userNotes, setUserNotes] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      setProduct({
        id: parseInt(productId),
        title: `Product ${productId}`,
        price: 199.99,
        discountedPrice: 179.99,
        rating: 4.5,
        reviewCount: 128,
        inStock: true,
        images: [
         "/laptopnew.jpg",
          "/placeholder.svg?height=500&width=500",
          "/placeholder.svg?height=500&width=500",
          "/placeholder.svg?height=500&width=500",
        ],
        sizes: ["S", "M", "L"],
        colors: ["Black", "White", "Blue"],
        description: `Description for Product ${productId}. Experience premium quality with our latest offering.`,
        specifications: {
          "Battery Life": "Up to 30 hours",
          "Bluetooth Version": "5.0",
          "Noise Cancellation": "Active",
          Weight: "250g",
          Warranty: "2 years",
        },
        reviews: [
          {
            id: 1,
            author: "John Doe",
            rating: 5,
            comment: "Excellent product, highly recommended!",
            date: "2023-05-15",
          },
          {
            id: 2,
            author: "Jane Smith",
            rating: 4,
            comment: "Great product, but could use some improvements.",
            date: "2023-05-10",
          },
        ],
        sellerPhoneNumber: "+2348063249490", // Example seller phone number
      });
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div className="flex m-0 justify-center items-center h-100vh">Loading...</div>;
  }

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleSizeChange = (newSize: string) => {
    setSelectedSize(newSize);
  };

  const handleColorChange = (newColor: string) => {
    setSelectedColor(newColor);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Products", href: "/products" },
          { label: product.title, href: `/products/${product.id}` },
        ]}
      />
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <ImageGallery images={product.images} />
        <div className="space-y-6">
          <ProductInfo
            title={product.title}
            price={product.price}
            discountedPrice={product.discountedPrice}
            rating={product.rating}
            reviewCount={product.reviewCount}
            inStock={product.inStock}
          />
          <AddToCartSection
            sizes={product.sizes}
            colors={product.colors}
            onQuantityChange={handleQuantityChange}
            onSizeChange={handleSizeChange}
            onColorChange={handleColorChange}
            onAddToCart={function (
              quantity: number,
              size: string,
              color: string
            ): void {
              throw new Error("Function not implemented.");
            }}
          />

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Delivery Details </h3>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
                placeholder="Enter your delivery address"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                value={userNotes}
                onChange={(e) => setUserNotes(e.target.value)}
                placeholder="Any special instructions or notes"
              />
            </div>
          </div>
          <WhatsAppButton
            product={product}
            quantity={quantity}
            selectedSize={selectedSize}
            selectedColor={selectedColor}
            userAddress={userAddress}
            userPhone={userPhone}
            userNotes={userNotes}
          />
        </div>
      </div>
      <div className="mt-12">
        <DescriptionReviewsTabs
          description={product.description}
          specifications={product.specifications}
          reviews={product.reviews}
        />
      </div>
      <div className="mt-16">
        <RelatedProducts products={[]} />
      </div>
    </div>
  );
}
