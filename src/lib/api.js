import { products } from '../data/products';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getProducts() {
  await delay(100);
  return products;
}

export async function getProductById(id) {
  await delay(100);
  const product = products.find((p) => p.id === parseInt(id));
  return product || null;
}

export async function getProductsByCategory(category) {
  await delay(100);
  return products.filter((p) => p.category === category);
}

export async function getRelatedProducts(productId, category, limit = 4) {
  await delay(100);
  return products
    .filter((p) => p.category === category && p.id !== parseInt(productId))
    .slice(0, limit);
}