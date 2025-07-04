import { useQuery } from "@tanstack/react-query";
import { fetchProductsByCategoryId } from "../services/products";
import { categoryMap } from "../constants/categories";

export const useProductsByCategory = (category: string) => {
  const categoryId = categoryMap[category];

  return useQuery({
    queryKey: ["products", category],
    queryFn: () => fetchProductsByCategoryId(categoryId),
    enabled: !!categoryId,
  });
};
