import { CartList } from '../../components/cart/CartList';
import { CartSummary } from '../../components/cart/CartSummary';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function CartPage() {
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary-600">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900 font-medium">Shopping Cart</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <CartList />
          </div>
        </div>

        <div className="lg:col-span-1">
          <CartSummary />
        </div>
      </div>
    </div>
  );
}