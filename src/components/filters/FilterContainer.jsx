'use client';

import { CategoryFilter } from './CategoryFilter';
import { PriceRangeSlider } from './PriceRangeSlider';
import { BrandFilter } from './BrandFilter';
import { Button } from '../ui/Button';
import { useFilters } from '../../hooks/useFilters';
import { RotateCcw } from 'lucide-react';

export function FilterContainer() {
  const { resetFilters, filters } = useFilters();

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.brands.length > 0 ||
    filters.search ||
    filters.minPrice > 0 ||
    filters.maxPrice < 1000;

  return (
    <div className="rounded-lg shadow-md p-4 space-y-6 bg-primary-800">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Filters</h2>
        {hasActiveFilters && (
          <Button
            size="sm"
            onClick={resetFilters}
            className="text-white bg-transparent hover:bg-white hover:text-primary-800"
          >
            <RotateCcw className="h-4 w-4 mr-1" />
            Reset
          </Button>
        )}
      </div>

      <CategoryFilter />
      <PriceRangeSlider />
      <BrandFilter />
    </div>
  );
}