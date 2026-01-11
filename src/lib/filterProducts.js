export function filterProducts(products, filters) {
  let filtered = [...products];

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(
      (product) =>
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower)
    );
  }

  if (filters.categories?.length > 0) {
    filtered = filtered.filter((product) =>
      filters.categories.includes(product.category)
    );
  }

  if (filters.minPrice !== undefined) {
    filtered = filtered.filter((product) => product.price >= filters.minPrice);
  }
  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter((product) => product.price <= filters.maxPrice);
  }

  if (filters.brands?.length > 0) {
    filtered = filtered.filter((product) =>
      filters.brands.includes(product.brand)
    );
  }


  return filtered;
}