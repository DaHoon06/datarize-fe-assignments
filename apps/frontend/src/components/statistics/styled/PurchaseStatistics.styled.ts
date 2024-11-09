import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
  width: 100%;
  max-width: 900px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;

export const ChartContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DatePickerSection = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 14px;
    
    .date-picker {
        display: flex;
        flex-direction: column;
        gap: 4px;
        align-items: flex-start;
    }
    
    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`;
