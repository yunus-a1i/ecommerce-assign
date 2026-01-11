import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { ProductImage } from '../../../components/product/ProductImage';
import { ProductDetails } from '../../../components/product/ProductDetails';
import { ProductReviews } from '../../../components/product/ProductReviews';
import { ProductCard } from '../../../components/product/ProductCard';
import { getProductById, getRelatedProducts } from '../../../lib/api';

export default async function ProductPage({ params }) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(
    params.id,
    product.category,
    4
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary-600">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link
          href={`/?category=${product.category}`}
          className="hover:text-primary-600"
        >
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900 font-medium truncate max-w-xs">
          {product.title}
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ProductImage images={product.image} title={product.title} />

        <ProductDetails product={product} />
      </div>

      <ProductReviews productId={product.id} />

      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}