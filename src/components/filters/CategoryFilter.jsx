'use client';

import { Checkbox } from '../ui/Checkbox';
import { useFilters } from '../../hooks/useFilters';
import { categories } from '../../data/categories';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export function CategoryFilter() {
  const [isExpanded, setIsExpanded] = useState(true);
  const { filters, toggleCategory } = useFilters();

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="flex items-center justify-between w-full text-left"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="font-medium text-white">Categories</h3>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-white" />
        ) : (
          <ChevronDown className="h-5 w-5 text-white" />
        )}
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-3 text-white">
          {categories.map((category) => (
            <Checkbox
              key={category.id}
              checked={filters.categories.includes(category.name)}
              onChange={() => toggleCategory(category.name)}
              label={category.label}
            />
          ))}
        </div>
      )}
    </div>
  );
}