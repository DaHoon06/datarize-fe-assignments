import React from 'react';
import {Table, Th, Td, Tr} from './styled/CustomerTable.styled.ts';
import {CustomerList} from "../../types";

type Props = {
  customers: CustomerList[] | undefined;
};

export const CustomerTable: React.FC<Props> = ({ customers }) => {
  const handleClick = (userId: number) => {
    alert(userId)
  }
  return (
    <Table>
      <thead>
      <tr>
        <Th>고객 명</Th>
        <Th>구매 가격</Th>
        <Th>구매 수</Th>
      </tr>
      </thead>
      <tbody>
      {customers?.length === 0 ? (
        <Tr>
          <Td colSpan={3}>검색 결과가 없습니다.</Td>
        </Tr>
        ) : (
        <>
          {customers?.map((customer) => (
            <Tr key={`customer_${customer.id}`} onClick={() => handleClick(customer.id)}>
              <Td>{customer.name}</Td>
              <Td>{customer.totalAmount.toLocaleString()}원</Td>
              <Td>{customer.count}</Td>
            </Tr>
          ))}
        </>
      )}

      </tbody>
    </Table>
  );
};
