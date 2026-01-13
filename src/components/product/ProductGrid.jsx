'use client';

import { ProductCard } from './ProductCard';
import { ProductGridSkeleton } from '../ui/Skeleton';
import { useProducts } from '../../hooks/useProducts';
import { Package } from 'lucide-react';

export function ProductGrid() {
  const { products, isLoading, totalCount } = useProducts();

  if (isLoading) {
    return <ProductGridSkeleton count={6} />;
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Package className="h-16 w-16 text-gray-400 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          No products found
        </h3>
        <p className="text-gray-500 max-w-md">
          We couldn&apos;t find any products matching your criteria. Try adjusting
          your filters or search terms.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}