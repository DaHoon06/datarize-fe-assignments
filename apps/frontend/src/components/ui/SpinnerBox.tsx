import {PropsWithChildren, ReactElement} from "react";
import styled from "styled-components";

interface SpinnerBoxProp extends PropsWithChildren {}

const SpinnerBoxContainer = styled.div`
    width: 100%;
    min-height: 100px;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const SpinnerBox = ({ children }: SpinnerBoxProp): ReactElement => {
  return (
    <SpinnerBoxContainer>
      {children}
    </SpinnerBoxContainer>
  )
}
