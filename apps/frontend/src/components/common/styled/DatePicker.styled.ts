import styled from "styled-components";

export const DatePickerWrapper = styled.div`
    .react-datepicker__input-container {
        display: flex;
        align-items: center;
    }

    .react-datepicker__input-container input {
        width: 220px;
        padding: 12px;
        font-size: 16px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        background-color: #f9f9f9;
        color: #333;
        transition: all 0.3s ease;
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .react-datepicker__input-container input:focus {
        outline: none;
        border-color: #cbcbcb;
        box-shadow: 0 0 8px rgba(90, 91, 90, 0.2);
    }

    .react-datepicker {
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .react-datepicker__header {
        background-color: #f0f0f0;
        color: #333;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom: 1px solid #e0e0e0;
    }

    .react-datepicker__day {
        font-size: 16px;
        font-weight: normal;
        color: #333;
    }

    .react-datepicker__day--selected {
        background-color: #cbcbcb;
        color: white;
    }

    .react-datepicker__day--today {
        border-radius: 50%;
        background-color: #f1f1f1;
    }

    .react-datepicker__day--highlighted {
        background-color: #8c8c8c;
        color: #333;
    }

    .react-datepicker__day:hover {
        background-color: #f1f1f1;
        cursor: pointer;
    }

    .react-datepicker__triangle {
        display: none;
    }
`;
