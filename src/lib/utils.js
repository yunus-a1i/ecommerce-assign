export function cn(...classes) {
  return classes.filter(item => item).join(" ");
}

export function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

export function truncateText(text, maxLength) {
  if (!text) return "";
  if (text.length <= maxLength) return text;

  return text.substring(0, maxLength) + "...";
}

export function debounce(func, delay) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export function parseQueryParams(searchParams) {
  const filters = {};

  if (searchParams.get("category")) {
    filters.categories = searchParams.get("category").split(",");
  }

  if (searchParams.get("minPrice")) {
    filters.minPrice = Number(searchParams.get("minPrice"));
  }

  if (searchParams.get("maxPrice")) {
    filters.maxPrice = Number(searchParams.get("maxPrice"));
  }

  if (searchParams.get("brand")) {
    filters.brands = searchParams.get("brand").split(",");
  }

  if (searchParams.get("search")) {
    filters.search = searchParams.get("search");
  }

  return filters;
}

export function buildQueryString(filters) {
  const params = new URLSearchParams();

  if (filters.categories && filters.categories.length > 0) {
    params.set("category", filters.categories.join(","));
  }

  if (filters.minPrice !== undefined) {
    params.set("minPrice", filters.minPrice);
  }

  if (filters.maxPrice !== undefined) {
    params.set("maxPrice", filters.maxPrice);
  }

  if (filters.brands && filters.brands.length > 0) {
    params.set("brand", filters.brands.join(","));
  }

  if (filters.search) {
    params.set("search", filters.search);
  }

  return params.toString();
}
