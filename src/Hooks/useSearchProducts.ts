import { useQuery } from "@tanstack/react-query";
import { fetchProductsBySearchQuery } from "../services/products";

export const useSearchProducts = (search: string) => {
  return useQuery({
    queryKey: ["search-products", search],
    queryFn: () => fetchProductsBySearchQuery(search),
    enabled: !!search, 
  });
};
