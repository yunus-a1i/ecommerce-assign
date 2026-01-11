'use client';

import { CartItem } from './CartItem';
import { useCart } from '../../hooks/useCart';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../components/ui/Button';

export function CartList() {
  const { items, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <ShoppingBag className="h-16 w-16 text-gray-400 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Your cart is empty
        </h3>
        <p className="text-gray-500 mb-6">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link href="/">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Cart ({items.length} {items.length === 1 ? 'item' : 'items'})
        </h2>
        <button
          onClick={clearCart}
          className="text-sm text-red-600 hover:text-red-700"
        >
          Clear Cart
        </button>
      </div>

      <div className="divide-y divide-gray-200">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}