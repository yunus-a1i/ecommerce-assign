'use client';

import { useState, useEffect } from 'react';
import { useFilters } from '../../hooks/useFilters';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { formatPrice } from '../../lib/utils';

export function PriceRangeSlider() {
  const [isExpanded, setIsExpanded] = useState(true);
  const { filters, setPriceRange } = useFilters();
  const [localMin, setLocalMin] = useState(filters.minPrice);
  const [localMax, setLocalMax] = useState(filters.maxPrice);

  useEffect(() => {
    setLocalMin(filters.minPrice);
    setLocalMax(filters.maxPrice);
  }, [filters.minPrice, filters.maxPrice]);

  const handleApply = () => {
    setPriceRange(localMin, localMax);
  };

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="flex items-center justify-between w-full text-left"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="font-medium text-white">Price Range</h3>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-white" />
        ) : (
          <ChevronDown className="h-5 w-5 text-white" />
        )}
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-xs text-white">Min</label>
              <input
                type="number"
                value={localMin}
                onChange={(e) => setLocalMin(Number(e.target.value))}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                min={0}
                max={localMax - 1}
              />
            </div>
            <div className="flex-1">
              <label className="text-xs text-white">Max</label>
              <input
                type="number"
                value={localMax}
                onChange={(e) => setLocalMax(Number(e.target.value))}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                min={localMin + 1}
              />
            </div>
          </div>

          <input
            type="range"
            min={0}
            max={1000}
            value={localMax}
            onChange={(e) => setLocalMax(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
          />

          <div className="flex justify-between text-sm text-white">
            <span>{formatPrice(localMin)}</span>
            <span>{formatPrice(localMax)}</span>
          </div>

          <button
            onClick={handleApply}
            className="w-full py-2 bg-white text-primary-800 rounded-md hover:bg-gray-100 transition-colors"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
}