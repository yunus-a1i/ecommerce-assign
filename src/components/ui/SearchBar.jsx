'use client';

import { Search, X } from 'lucide-react';
import { useSearch } from '../../hooks/useSearch';

export function SearchBar({ className }) {
  const { inputValue, handleSearchChange, clearSearch } = useSearch();

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-white" />
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleSearchChange(e.target.value)}
        placeholder="Search products..."
        className="block w-full pl-10 pr-10 py-2 bg-primary-800 outline-none border border-gray-300 rounded-lg text-white placeholder-white"
      />
      {inputValue && (
        <button
          onClick={clearSearch}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
        </button>
      )}
    </div>
  );
}