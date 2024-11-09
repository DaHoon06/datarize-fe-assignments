import {CustomerList, Sort} from "../../types";

function customerListSorting(data: CustomerList[], sort: Sort): CustomerList[] {
  if (data.length > 0) return data.sort((a, b) => {
    if (sort === 'asc') {
      return a.id - b.id;
    } else if (sort === 'desc') {
      return b.id - a.id;
    }
    return 0;
  });
  return data;
}

export default customerListSorting;
