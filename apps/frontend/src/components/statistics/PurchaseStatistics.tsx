import {ReactElement, useState} from "react";
import {BarChart} from "../chart/BarChart.tsx";
import {usePurchaseQuery} from "../../state/queries/hooks/usePurchaseQuery.ts";
import CustomDatePicker from "../common/DatePicker.tsx";
import * as S from './styled/PurchaseStatistics.styled.ts';

export const PurchaseStatistics = (): ReactElement => {
  const [dates, setDates] = useState({
    from: new Date("2024-07-01").toISOString(),
    to: new Date("2024-07-31").toISOString()
  });
  const {isLoading, data} = usePurchaseQuery({...dates});

  if (isLoading) return <div>데이터페칭</div>

  return (
    <S.CardWrapper>
      <S.Title>구매 데이터</S.Title>

      <S.DatePickerSection>
        <div className={'date-picker'}>
          <div>시작일</div>
          <CustomDatePicker
            date={new Date(dates.from)}
            onChange={(value) => setDates({...dates, from: value?.toISOString() || ''})}/>
        </div>
        <div className={'date-picker'}>
          <div>종료일</div>
          <CustomDatePicker
            date={new Date(dates.to)}
            onChange={(value) => setDates({...dates, to: value?.toISOString() || ''})}/>
        </div>

      </S.DatePickerSection>

      <S.ChartContainer>
        <BarChart data={data || []}/>
      </S.ChartContainer>
    </S.CardWrapper>
  );
}
