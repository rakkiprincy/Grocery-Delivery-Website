import { useQuery } from '@tanstack/react-query';
import { Product } from '@shared/schema';

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ['/api/products'],
  });
}

export function useProductsByCategory(category: string) {
  return useQuery<Product[]>({
    queryKey: ['/api/products/category', category],
    enabled: category !== 'all',
  });
}

export function useProductSearch(query: string) {
  return useQuery<Product[]>({
    queryKey: ['/api/products/search', { q: query }],
    enabled: query.length > 0,
  });
}
