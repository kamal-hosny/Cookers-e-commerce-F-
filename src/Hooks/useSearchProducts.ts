import { useQuery } from "@tanstack/react-query";
import { fetchProductsBySearchQuery } from "../services/products";
import { useTranslation } from "react-i18next";

export const useSearchProducts = (search: string) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return useQuery<any[]>({
    queryKey: ["search-products", search, currentLang],
    queryFn: async () => {
      const allProducts: any[] = await fetchProductsBySearchQuery(search);

      return allProducts.filter((product: any) => {
        const languageMeta = product.meta_data?.find(
          (meta: any) => meta.key === "Language"
        );

        return languageMeta?.value === (currentLang === "it" ? "italian" : "english");
      });
    },
    enabled: !!search,
  });
};
