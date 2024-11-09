import {CustomerView} from "../components/customer/CustomerView.tsx";
import {PurchaseStatistics} from "../components/statistics/PurchaseStatistics.tsx";

export const HomePage = () => {


  return (
    <>
      <PurchaseStatistics />
      <CustomerView />
    </>
  )
}
