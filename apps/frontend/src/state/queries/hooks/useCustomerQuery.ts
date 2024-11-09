import {QueryKey, useQuery, UseQueryOptions} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {queryKeys} from "../keys.ts";
import {customerDetailsApi, customerListApi} from "../../../api";
import {CustomerList, CustomerPurchaseDetail, Queries} from "../../../types";

type ResponseError = AxiosError<{
  statusCode: number;
  message: string;
  error: string;
}>;

type UseQueryCustomOptions<TQueryFnData = unknown, TData = TQueryFnData> = Omit<
  UseQueryOptions<TQueryFnData, ResponseError, TData, QueryKey>,
  'queryKey'
>;

export const useCustomerQuery = (queries: Queries, queryOptions?: UseQueryCustomOptions<CustomerList[], CustomerList[]>) => {
  return useQuery<CustomerList[], ResponseError>({
    queryKey: [queryKeys.customer.list, queries.name],
    queryFn: () => customerListApi(queries),
    ...queryOptions,
  });
}

export const useCustomerDetailQuery = (id: number, queryOptions?: UseQueryCustomOptions<CustomerPurchaseDetail[], CustomerPurchaseDetail[]>) => {
  return useQuery<CustomerPurchaseDetail[], ResponseError>({
    queryKey: [queryKeys.customer.details, id],
    queryFn: () => customerDetailsApi(id),
    ...queryOptions,
  });
}
