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


export type {
  CustomerList, CustomerPurchaseDetail
}
