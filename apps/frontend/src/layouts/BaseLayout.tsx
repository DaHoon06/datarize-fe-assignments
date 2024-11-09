import React, { ReactElement, useState, useEffect } from "react";
import { Header } from "./Header.tsx";
import { SideBar } from "./SideBar.tsx";
import { Outlet } from "react-router";
import { BaseContainer, Main, Container } from './styled/BaseLayout.styled.ts';

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
