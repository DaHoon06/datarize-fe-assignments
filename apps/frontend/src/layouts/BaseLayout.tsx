import styled from "styled-components";
import React, { ReactElement, useState, useEffect } from "react";
import { Header } from "./Header.tsx";
import { SideBar } from "./SideBar.tsx";
import { Outlet } from "react-router";

const BaseContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Container = styled.div`
    width: 100%;
    height: calc(100% - 70px);
    background-color: #fcfcfc;
    display: flex;
    margin-top: 70px;
`;

const Main = styled.main<{ $marginLeft: string }>`
    padding: 1em;
    width: 100%;
    margin-left: ${(props) => props.$marginLeft};
    .main_container {
        max-width: 1000px;
        text-align: left;
        margin: 0;
        padding-bottom: 4em;
    }
`;

const BaseLayout = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 767);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BaseContainer>
      <Header />
      <Container>
        <SideBar isVisible={isVisible} />
        <Main $marginLeft={isVisible ? "200px" : "0px"}>
          <div className={'main_container'}>
            <Outlet />
          </div>
        </Main>
      </Container>
    </BaseContainer>
  );
};

export default React.memo(BaseLayout);
