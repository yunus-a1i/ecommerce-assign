'use client';

import { Checkbox } from '../ui/Checkbox';
import { useFilters } from '../../hooks/useFilters';
import { brands } from '../../data/brands';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export function BrandFilter() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const { filters, toggleBrand } = useFilters();

  const displayedBrands = showAll ? brands : brands.slice(0, 5);

  return (
    <div className="pb-4">
      <button
        className="flex items-center justify-between w-full text-left"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="font-medium text-white">Brands</h3>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-white" />
        ) : (
          <ChevronDown className="h-5 w-5 text-white" />
        )}
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-3">
          {displayedBrands.map((brand) => (
            <Checkbox
              key={brand.id}
              checked={filters.brands.includes(brand.name)}
              onChange={() => toggleBrand(brand.name)}
              label={brand.name}
            />
          ))}

          {brands.length > 5 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm text-primary-600 hover:text-primary-700"
            >
              {showAll ? 'Show Less' : `Show All (${brands.length})`}
            </button>
          )}
        </div>
      )}
    </div>
  );
}