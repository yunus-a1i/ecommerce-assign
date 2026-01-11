'use client';

import { useState, useEffect, useMemo } from 'react';
import { products } from '../data/products';
import { filterProducts } from '../lib/filterProducts';
import { useSelector } from 'react-redux';

export function useProducts() {
  const [isLoading, setIsLoading] = useState(true);
  const filters = useSelector((state) => state.filter);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    return filterProducts(products, filters);
  }, [filters]);

  return {
    products: filteredProducts,
    allProducts: products,
    isLoading,
    totalCount: filteredProducts.length,
  };
}