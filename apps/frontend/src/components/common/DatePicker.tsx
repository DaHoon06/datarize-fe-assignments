import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, {ReactElement} from "react";
import {DatePickerWrapper} from "./styled/DatePicker.styled.ts";

interface DatePickerProps {
  date: Date | null;
  onChange: (date: Date | null) => void;
}

const CustomDatePicker = ({ date, onChange }: DatePickerProps): ReactElement => {
  return (
    <DatePickerWrapper>
      <DatePicker selected={date} onChange={(date) => onChange(date)} />
    </DatePickerWrapper>
  )
}

export default React.memo(CustomDatePicker);
