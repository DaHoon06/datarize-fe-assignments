import { CustomerView } from "@/components/customer/views/CustomerView.tsx";
import { PurchaseStatistics } from "@/components/statistics/PurchaseStatistics.tsx";
import { ReactElement } from "react";

export const HomePage = (): ReactElement => {
  return (
    <>
      <PurchaseStatistics />
      <CustomerView />
    </>
  )
}
