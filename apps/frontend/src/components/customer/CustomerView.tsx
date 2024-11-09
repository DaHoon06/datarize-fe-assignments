import {ReactElement, useState} from "react";
import {CustomerTable} from "./CustomerTable.tsx";
import {Sort} from "../../types";
import {useCustomerQuery} from "../../state/queries/hooks/useCustomerQuery.ts";
import useDebounce from "../../hooks/useDebounce.ts";
import {Spinner} from "../ui/Spinner.tsx";
import {CustomerOption} from "./CustomerOption.tsx";


export const CustomerView = (): ReactElement => {
  const [sort, setSort] = useState<Sort>('desc');
  const [keyword, setKeyword] = useState('');
  const value = useDebounce(keyword, 300);

  const {isLoading, data} = useCustomerQuery({sortBy: sort, name: value}, {
    staleTime: 10 * 60 * 1000,
    cacheTime: 15 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div><Spinner /></div>

  return (
    <div>
      <h2>한 달 동안 가장 많이 구매한 고객 리스트</h2>
      <CustomerOption sort={sort} keyword={keyword} onChangeInput={setKeyword} onClickSortButton={setSort} />
      <CustomerTable customers={data} />
    </div>
  )
}
