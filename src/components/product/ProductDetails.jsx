'use client';

import { useState } from 'react';
import { ShoppingCart, Heart, Share2, Check, Truck } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Rating } from '../../components/ui/Rating';
import { QuantitySelector } from './QuantitySelector';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../lib/utils';

export function ProductDetails({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, quantity);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="space-y-6">
      <Badge variant="primary">{product.category}</Badge>

      <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>

      <div className="flex items-center gap-4">
        <Rating
          value={product.rating.rate}
          count={product.rating.count}
          size="lg"
        />
        <span className="text-sm text-gray-500">
          {product.rating.count} reviews
        </span>
      </div>

      <div className="flex items-baseline gap-4">
        <span className="text-4xl font-bold text-gray-900">
          {formatPrice(product.price)}
        </span>
        {product.originalPrice && (
          <span className="text-xl text-gray-500 line-through">
            {formatPrice(product.originalPrice)}
          </span>
        )}
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
      </div>

      {product.brand && (
        <div>
          <span className="text-sm text-gray-500">Brand: </span>
          <span className="font-medium text-gray-900">{product.brand}</span>
        </div>
      )}

      <div>
        <h3 className="font-semibold text-gray-900 mb-2">Quantity</h3>
        <QuantitySelector
          quantity={quantity}
          onQuantityChange={setQuantity}
          max={10}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          size="lg"
          onClick={handleAddToCart}
          loading={isAdding}
          className="flex-1"
        >
          {isAdding ? (
            <>
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </>
          )}
        </Button>
        <Button size="lg" variant="outline">
          <Heart className="h-5 w-5 mr-2" />
          Wishlist
        </Button>
        <Button size="lg" variant="ghost">
          <Share2 className="h-5 w-5" />
        </Button>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center gap-3 text-gray-700">
          <Truck className="h-5 w-5 text-green-600" />
          <div>
            <p className="font-medium">Free Shipping</p>
            <p className="text-sm text-gray-500">
              On orders over $50. Delivery in 3-5 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}