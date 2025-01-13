interface ICategoryData {
  title: string;
  image: string;
  link: string;
  badge?: string;
}

export const FeaturedCategoriesData: ICategoryData[] = [
  {
    title: "Electronics",
    image: "/placeholder.svg?height=400&width=400",
    link: "/category/electronics",
    badge: "Popular",
  },
  {
    title: "Clothing",
    image: "/placeholder.svg?height=400&width=400",
    link: "/category/clothing",
  },
  {
    title: "Accessories",
    image: "/placeholder.svg?height=400&width=400",
    link: "/category/accessories",
    badge: "New",
  },
  {
    title: "Home & Kitchen",
    image: "/placeholder.svg?height=400&width=400",
    link: "/category/home-and-kitchen",
  },
  {
    title: "Beauty",
    image: "/placeholder.svg?height=400&width=400",
    link: "/category/beauty",
  },
  {
    title: "Sports",
    image: "/placeholder.svg?height=400&width=400",
    link: "/category/sports",
  },
  {
    title: "Books",
    image: "/placeholder.svg?height=400&width=400",
    link: "/category/books",
  },
  {
    title: "Toys",
    image: "/placeholder.svg?height=400&width=400",
    link: "/category/toys",
  },
];

export interface IProductData {
  id: number;
  title: string;
  price: number;
  images: string[];
  rating: number;
  discountedPrice?: number;
  description?: string;
}

export const ProductsData: IProductData[] = [
  {
    id: 1,
    title: "Wireless Earbuds",
    price: 79.99,
    images: [
      "/placeholder.svg?height=300&width=300&text=Image1",
      "/placeholder.svg?height=300&width=300&text=Image2",
      "/placeholder.svg?height=300&width=300&text=Image3",
    ],
    rating: 4.5,
    description: "Durable and spacious with multiple compartments.",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 199.99,
    discountedPrice: 179.99,
    images: [
      "/placeholder.svg?height=300&width=300&text=Image1",
      "/placeholder.svg?height=300&width=300&text=Image2",
    ],
    rating: 4.2,
  },
  {
    id: 3,
    title: "Laptop Backpack",
    price: 49.99,
    images: ["/placeholder.svg?height=300&width=300&text=Image1"],
    rating: 4.7,
  },
  {
    id: 4,
    title: "Bluetooth Speaker",
    price: 89.99,
    images: [
      "/placeholder.svg?height=300&width=300&text=Image1",
      "/placeholder.svg?height=300&width=300&text=Image2",
      "/placeholder.svg?height=300&width=300&text=Image3",
      "/placeholder.svg?height=300&width=300&text=Image4",
    ],
    rating: 4.1,
  },
  {
    id: 5,
    title: "Fitness Tracker",
    price: 59.99,
    images: [
      "/placeholder.svg?height=300&width=300&text=Image1",
      "/placeholder.svg?height=300&width=300&text=Image2",
    ],
    rating: 4.4,
  },
  {
    id: 6,
    title: "Portable Charger",
    price: 39.99,
    images: [
      "/placeholder.svg?height=300&width=300&text=Image1",
      "/placeholder.svg?height=300&width=300&text=Image2",
    ],
    rating: 4.6,
  },
];
