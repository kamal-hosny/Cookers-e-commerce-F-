import { useQuery } from "@tanstack/react-query";
import { fetchProductsByCategoryId } from "../services/products";
import { categoryMapEN, categoryMapIT } from "../constants/categories";
import { useTranslation } from "react-i18next";

export const useProductsByCategory = (category: string) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const categoryId =
    lang === "it" ? categoryMapIT[category] : categoryMapEN[category];

  return useQuery({
    queryKey: ["products", category, lang], 
    queryFn: () => fetchProductsByCategoryId(categoryId),
    enabled: !!categoryId,
  });
};
