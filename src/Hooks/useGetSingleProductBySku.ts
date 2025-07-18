import { useQuery } from "@tanstack/react-query"
import { fetchProductsBySku } from "../services/products"


export const useGetSingleProductBySku = (sku: string) => {

    return useQuery({
        queryKey: ["product", sku],
        queryFn: () => fetchProductsBySku(sku),
    enabled: !!sku,
    })

}