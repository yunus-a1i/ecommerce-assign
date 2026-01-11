'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import {
  toggleCategory,
  setPriceRange,
  toggleBrand,
  setSearch,
  resetFilters,
  setAllFilters,
} from '../store/slices/filterSlice';
import { buildQueryString, parseQueryParams } from '../lib/utils';

export function useFilters() {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const filters = useSelector((state) => state.filter);

  useEffect(() => {
    const params = parseQueryParams(searchParams);
    if (Object.keys(params).length > 0) {
      dispatch(setAllFilters(params));
    }
  }, []);

  const updateURL = useCallback(
    (newFilters) => {
      const queryString = buildQueryString(newFilters);
      router.push(queryString ? `/?${queryString}` : '/', { scroll: false });
    },
    [router]
  );

  const handleToggleCategory = (category) => {
    dispatch(toggleCategory(category));
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    updateURL({ ...filters, categories: newCategories });
  };

  const handleSetPriceRange = (min, max) => {
    dispatch(setPriceRange({ min, max }));
    updateURL({ ...filters, minPrice: min, maxPrice: max });
  };

  const handleToggleBrand = (brand) => {
    dispatch(toggleBrand(brand));
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    updateURL({ ...filters, brands: newBrands });
  };

  const handleSetSearch = (search) => {
    dispatch(setSearch(search));
    updateURL({ ...filters, search });
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
    router.push('/', { scroll: false });
  };

  return {
    filters,
    toggleCategory: handleToggleCategory,
    setPriceRange: handleSetPriceRange,
    toggleBrand: handleToggleBrand,
    setSearch: handleSetSearch,
    resetFilters: handleResetFilters,
  };
}