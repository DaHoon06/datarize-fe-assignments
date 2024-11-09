import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../keys.ts";
import { purchaseFrequencyApi } from "@/api";

export const usePurchaseQuery = (dates: { to: string, from: string }) => {
  return useQuery({
    queryKey: [queryKeys.purchase.chartData, dates],
    queryFn: () => purchaseFrequencyApi(dates),
  })
}
