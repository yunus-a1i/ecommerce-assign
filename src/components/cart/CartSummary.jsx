'use client';

import { useCart } from '../../hooks/useCart';
import { Button } from '../../components/ui/Button';
import { formatPrice } from '../../lib/utils';
import { ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export function CartSummary() {
  const { items, totalAmount } = useCart();

  const subtotal = totalAmount;
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Order Summary
      </h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">
            {shipping === 0 ? (
              <span className="text-green-600">FREE</span>
            ) : (
              formatPrice(shipping)
            )}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax (8%)</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </div>

        <div className="border-t border-gray-200 pt-3 mt-3">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </div>

      {subtotal < 50 && (
        <p className="text-sm text-gray-500 mt-4">
          Add {formatPrice(50 - subtotal)} more for free shipping!
        </p>
      )}

      <Button className="w-full mt-6" size="lg">
        Proceed to Checkout
      </Button>

      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <ShieldCheck className="h-5 w-5 text-green-600" />
          <span>Secure checkout</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Truck className="h-5 w-5 text-blue-600" />
          <span>Free shipping over $50</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <RotateCcw className="h-5 w-5 text-orange-600" />
          <span>30-day returns</span>
        </div>
      </div>
    </div>
  );
}