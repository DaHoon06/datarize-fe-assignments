import {CustomerView} from "../components/customer/views/CustomerView.tsx";
import {PurchaseStatistics} from "../components/statistics/PurchaseStatistics.tsx";

export const HomePage = () => {


  return (
    <>
      <PurchaseStatistics />
      <CustomerView />
    </>
  )
}
