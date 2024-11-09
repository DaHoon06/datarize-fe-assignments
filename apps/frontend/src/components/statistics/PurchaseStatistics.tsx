import {ReactElement, useState} from "react";
import {BarChart} from "../chart/BarChart.tsx";
import {usePurchaseQuery} from "../../state/queries/hooks/usePurchaseQuery.ts";
import CustomDatePicker from "../common/DatePicker.tsx";
import * as S from './styled/PurchaseStatistics.styled.ts';
import {Spinner} from "../ui/Spinner.tsx";
import {SpinnerBox} from "../ui/SpinnerBox.tsx";

export const PurchaseStatistics = (): ReactElement => {
  const [dates, setDates] = useState({
    from: new Date("2024-07-01").toISOString(),
    to: new Date("2024-07-31").toISOString()
  });
  const {isLoading, data} = usePurchaseQuery({...dates});

  return (
    <S.CardWrapper>
      <S.Title>구매 데이터</S.Title>
      <S.DatePickerSection>
        <div className={'date-picker'}>
          <div>시작 날짜</div>
          <CustomDatePicker
            date={new Date(dates.from)}
            onChange={(value) => setDates({...dates, from: value?.toISOString() || ''})}/>
        </div>
        <div className={'date-picker'}>
          <div>종료 날짜</div>
          <CustomDatePicker
            date={new Date(dates.to)}
            onChange={(value) => setDates({...dates, to: value?.toISOString() || ''})}/>
        </div>
      </S.DatePickerSection>
      {isLoading ? (
        <SpinnerBox>
          <Spinner />
        </SpinnerBox>
      ) : (
        <S.ChartContainer>
          {data?.length === 0 ? (
            <S.WarningMessage>
              종료 날짜가 시작 날짜보다 이전입니다. 날짜를 확인해주세요.
            </S.WarningMessage>
          ) : (<BarChart data={data || []}/>)}
        </S.ChartContainer>
      )}
    </S.CardWrapper>
  );
}
