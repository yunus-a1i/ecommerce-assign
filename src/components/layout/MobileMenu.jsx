'use client';

import { X } from 'lucide-react';
import { FilterContainer } from '../filters/FilterContainer';
import { cn } from '../../lib/utils';

export function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      <div
        className={cn(
          'fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      <div
        className={cn(
          'fixed inset-y-0 left-0 w-80 bg-white z-50 lg:hidden transform transition-transform overflow-y-auto',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-lg font-semibold">Filters</span>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4">
          <FilterContainer />
        </div>
      </div>
    </>
  );
}