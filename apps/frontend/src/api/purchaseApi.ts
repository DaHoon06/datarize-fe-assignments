import {axiosInstance} from "../lib/axios";
import {AxiosResponse} from "axios";
import {PurchaseFrequencyData} from "../types";

type Queries = {
  from: string;
  to: string;
}

/**
 * @description 한 달 동안 모든 구매 데이터 반환
 * @param {Queries} queries 시작날짜 | 종료날짜
 */
export const purchaseFrequencyApi = async (queries?: Queries): Promise<PurchaseFrequencyData[]> => {
  let url = `/purchase-frequency`;
  if (queries) url += `?from=${queries.from}&to=${queries.to}`
  try {
    const response: AxiosResponse<PurchaseFrequencyData[]> = await axiosInstance.get(url);
    return response.data;
  } catch (e) {
    return [];
  }

}
