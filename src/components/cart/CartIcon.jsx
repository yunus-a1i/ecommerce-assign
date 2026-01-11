'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

export function CartIcon() {
  const { totalQuantity } = useCart();

  return (
    <Link
      href="/cart"
      className="relative p-2 rounded-lg transition-colors flex gap-2 px-4 bg-blue-900 text-white "
    >
      <ShoppingCart className="h-5 w-5" />
      Cart
      {totalQuantity > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {totalQuantity > 99 ? '99+' : totalQuantity}
        </span>
      )}
    </Link>
  );
}