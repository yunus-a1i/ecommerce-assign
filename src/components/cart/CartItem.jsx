"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { QuantitySelector } from "../../components/product/QuantitySelector";
import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../lib/utils";

export function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 py-4 border-b border-gray-200">
      <Link
        href={`/product/${item.id}`}
        className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg overflow-hidden"
      >
        <Image
          src={item.image}
          alt={item.title}
          width={96}
          height={96}
          className="w-full h-full object-contain p-2"
          unoptimized
        />
      </Link>

      <div className="flex-1 min-w-0">
        <Link
          href={`/product/${item.id}`}
          className="font-medium text-gray-900 hover:text-primary-600 line-clamp-2"
        >
          {item.title}
        </Link>
        <p className="text-lg font-bold text-gray-900 mt-1">
          {formatPrice(item.price)}
        </p>

        <div className="flex items-center mt-3">
          <QuantitySelector
            quantity={item.quantity}
            onQuantityChange={(qty) => updateQuantity(item.id, qty)}
            size="sm"
          />
        </div>
      </div>

      <div className="hidden sm:block text-right">
        <p className="text-sm text-gray-500">Total</p>
        <p className="text-lg font-bold text-gray-900">
          {formatPrice(item.totalPrice)}
        </p>
        <button
          onClick={() => removeFromCart(item.id)}
          className="p-2 text-gray-400 hover:text-red-600 transition-colors bg-gray-100 rounded-md"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
