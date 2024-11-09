import customerSorting from "./customerSorting";
import { CustomerList } from "../../types";

describe('고객 리스트 정렬', () => {
  let mockCustomerSortingFn: jest.Mock;

  const mockCustomerList: CustomerList[] = [
    { id: 10, name: "이서진", count: 1, totalAmount: 1000  },
    { id: 1, name: "김하늘", count: 1, totalAmount: 1000 },
    { id: 9, name: "조은비", count: 1, totalAmount: 1000 },
    { id: 13, name: "서지영", count: 1, totalAmount: 1000 },
    { id: 2, name: "서지영", count: 1, totalAmount: 1000 },
    { id: 19, name: "서지영", count: 1, totalAmount: 1000 },
  ];

  beforeEach(() => {
    mockCustomerSortingFn = jest.fn(customerSorting);
  });

  test('고객 리스트 ID 기준으로 오름차순 정렬', () => {
    const sortedCustomers = mockCustomerSortingFn(mockCustomerList, 'asc');

    // 오름차순 정렬 결과 확인
    expect(sortedCustomers[0].id).toBe(1);
    expect(sortedCustomers[1].id).toBe(2);
    expect(sortedCustomers[2].id).toBe(9);
    expect(sortedCustomers[3].id).toBe(10);
    expect(sortedCustomers[4].id).toBe(13);
    expect(sortedCustomers[5].id).toBe(19);

    // 리스트 비교
    expect(sortedCustomers).toEqual([
      { id: 1, name: '김하늘', count: 1, totalAmount: 1000 },
      { id: 2, name: '서지영', count: 1, totalAmount: 1000 },
      { id: 9, name: '조은비', count: 1, totalAmount: 1000 },
      { id: 10, name: '이서진', count: 1, totalAmount: 1000 },
      { id: 13, name: '서지영', count: 1, totalAmount: 1000 },
      { id: 19, name: '서지영', count: 1, totalAmount: 1000 },
    ]);
  });

  test('고객 리스트 ID 기준으로 내림차순 정렬', () => {
    const sortedCustomers = mockCustomerSortingFn(mockCustomerList, 'desc');

    expect(sortedCustomers[0].id).toBe(19);
    expect(sortedCustomers[1].id).toBe(13);
    expect(sortedCustomers[2].id).toBe(10);
    expect(sortedCustomers[3].id).toBe(9);
    expect(sortedCustomers[4].id).toBe(2);
    expect(sortedCustomers[5].id).toBe(1);

    // 리스트 비교
    expect(sortedCustomers).toEqual([
      { id: 19, name: '서지영', count: 1, totalAmount: 1000 },
      { id: 13, name: '서지영', count: 1, totalAmount: 1000 },
      { id: 10, name: '이서진', count: 1, totalAmount: 1000 },
      { id: 9, name: '조은비', count: 1, totalAmount: 1000 },
      { id: 2, name: '서지영', count: 1, totalAmount: 1000 },
      { id: 1, name: '김하늘', count: 1, totalAmount: 1000 },
    ]);
  });
});
