import {axiosInstance} from "../lib/axios";
import {AxiosResponse} from "axios";
import {CustomerList, CustomerPurchaseDetail, Queries} from "../types";

/**
 * @description 고객 목록을 반환한다.
 * @param {Queries} queries 정렬 | 고객이름
 */
export const customerListApi = async (queries: Queries): Promise<CustomerList[]> => {
  try {
    let url = `/customers?sortBy=${queries?.sortBy}`;
    if (queries?.name) url += `&name=${queries.name}`;
    const response: AxiosResponse<CustomerList[]>  = await axiosInstance.get(url);
    return response.data;
  } catch (e) {
    return [];
  }
}

/**
 * @description 특정 고객의 구매 정보를 반환한다.
 * @param {string} id 고객의 id
 * @return {CustomerPurchaseDetail[]} id에 해닿하는 고객이 구매한 데이터를 반환한다.
 */
export const customerDetailsApi = async (id: number): Promise<CustomerPurchaseDetail[]> => {
  const url = `/customers/${id}/purchases`;
  const response: AxiosResponse<CustomerPurchaseDetail[]> = await axiosInstance.get(url);
  return response.data;
}
