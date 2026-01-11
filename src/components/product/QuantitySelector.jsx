'use client';

import { Minus, Plus } from 'lucide-react';
import { cn } from '../../lib/utils';

export function QuantitySelector({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
  size = 'md',
}) {
  const sizes = {
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg',
  };

  const inputSizes = {
    sm: 'h-8 w-12 text-sm',
    md: 'h-10 w-16 text-base',
    lg: 'h-12 w-20 text-lg',
  };

  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= min && value <= max) {
      onQuantityChange(value);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleDecrease}
        disabled={quantity <= min}
        className={cn(
          'flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
          sizes[size]
        )}
      >
        <Minus className="h-4 w-4" />
      </button>

      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        min={min}
        max={max}
        className={cn(
          'text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
          inputSizes[size]
        )}
      />

      <button
        onClick={handleIncrease}
        disabled={quantity >= max}
        className={cn(
          'flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
          sizes[size]
        )}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}