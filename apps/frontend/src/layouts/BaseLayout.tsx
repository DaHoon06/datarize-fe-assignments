import styled from "styled-components";
import React, {PropsWithChildren} from "react";
import {Header} from "./Header.tsx";
import {SideBar} from "./SideBar.tsx";

const BaseContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 200px;
    background-color: #fcfcfc;
`;

const Main = styled.main`
    padding: 1em;
    max-width: 1000px;
    margin: 0 auto;
`;

interface BaseLayoutProps extends PropsWithChildren {}

const BaseLayout = ({children}: BaseLayoutProps) => {
  return (
    <BaseContainer>
      <SideBar />
      <Container>
        <Header />
        <Main>
          {children}
        </Main>
      </Container>
    </BaseContainer>

  )
}

export default React.memo(BaseLayout);
