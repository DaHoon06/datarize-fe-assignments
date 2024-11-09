import {ReactElement, useState} from "react";
import {CustomerTable} from "../CustomerTable.tsx";
import {Sort} from "../../../types";
import {useCustomerQuery} from "../../../state/queries/hooks/useCustomerQuery.ts";
import useDebounce from "../../../hooks/useDebounce.ts";
import {Spinner} from "../../ui/Spinner.tsx";
import {CustomerOption} from "../CustomerOption.tsx";
import styled from "styled-components";
import customerListSorting from "../../../services/customer/customerSorting.ts";


const CustomerViewWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
  width: 100%;
  max-width: 1100px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
`;


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
    <CustomerViewWrapper>
      <Title>한 달 동안 가장 많이 구매한 고객 리스트</Title>
      <CustomerOption sort={sort} keyword={keyword} onChangeInput={setKeyword} onClickSortButton={setSort}/>
      <CustomerTable customers={customerListSorting(data || [], sort)}/>
    </CustomerViewWrapper>
  )
}
