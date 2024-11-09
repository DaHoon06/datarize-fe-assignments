import {QueryKey, useQuery, UseQueryOptions} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {queryKeys} from "../keys.ts";
import {customerListApi} from "../../../api";
import {CustomerList, Queries} from "../../../types";

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
    queryKey: [queryKeys.customer.list, queries],
    queryFn: () => customerListApi(queries),
    ...queryOptions,
  });
}
