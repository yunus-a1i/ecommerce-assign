"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "../ui/Button";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";
import { formatPrice } from "../../lib/utils";

export function ProductCard({ product }) {
  const { addToCart, isInCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div className="group bg-white rounded-lg overflow-hidden transition-shadow duration-300">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-48">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
            <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
          </button>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          
          <h3 className="font-semibold text-gray-900 mb-1 hover:text-primary-600 transition-colors">
            {product.title}
          </h3>
          <span className="text-xl font-bold text-gray-900">
           {formatPrice(product.price)}
          </span>
        </Link>

        

        <div className="mt-3">
          
          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={isAdding}
            className={"w-full py-3 bg-primary-800"}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            {isInCart(product.id) ? "Added" : "Add to cart"}
          </Button>
        </div>
      </div>
    </div>
  );
}
