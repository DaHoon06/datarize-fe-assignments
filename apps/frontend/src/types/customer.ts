type CustomerList = {
  name: string;
  id: number;
  count: number;
  totalAmount: number;
}

type CustomerPurchaseDetail = {
  date: string;
  imgSrc: string;
  price: number;
  product: string;
  quantity: number;
}

type Sort = 'asc' | 'desc';
type Queries = {
  sortBy: Sort,
  name?: string
}

export type {
  CustomerList, CustomerPurchaseDetail, Sort, Queries
}
