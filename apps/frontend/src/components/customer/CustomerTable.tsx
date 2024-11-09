import {ReactElement} from 'react';
import {Table, Th, Td, Tr} from './styled/CustomerTable.styled.ts';
import {CustomerList} from "../../types";
import { useNavigate } from 'react-router-dom';

interface CustomerTableProps {
  customers: CustomerList[] | undefined;
};

export const CustomerTable = ({ customers }: CustomerTableProps): ReactElement => {
  const navigate = useNavigate();

  const handleClick = (userId: number, name: string) => {
    navigate(`/customer/${userId}`, { state: { name } });
  }

  return (
    <Table>
      <thead>
      <tr>
        <Th>ID</Th>
        <Th>고객 명</Th>
        <Th>총 구매 횟수</Th>
        <Th>총 구매 금액</Th>
      </tr>
      </thead>
      <tbody>
      {customers?.length === 0 ? (
        <Tr>
          <Td colSpan={4}>검색 결과가 없습니다.</Td>
        </Tr>
      ) : (
        <>
          {customers?.map((customer) => (
            <Tr key={`customer_${customer.id}`} onClick={() => handleClick(customer.id, customer.name)}>
              <Td>{customer.id}</Td>
              <Td>{customer.name}</Td>
              <Td>{customer.count}회</Td>
              <Td>{customer.totalAmount.toLocaleString()}원</Td>
            </Tr>
          ))}
        </>
      )}

      </tbody>
    </Table>
  );
};
