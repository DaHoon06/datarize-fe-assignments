import { ReactElement } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;  
    height: 100vh;
    background-color: #f4f4f4;
    padding: 20px;
`;

const Content = styled.div`
    text-align: center;
    width: 100%;
    max-width: 800px; 
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 36px;
    color: #333;
    margin-bottom: 20px;
`;

const Message = styled.p`
    font-size: 18px;
    color: #666;
    margin: 10px 0;
`;

const HomeButton = styled.button`
    font-size: 16px;
    color: #0257b2;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s;
`;

export const NotFoundPage = (): ReactElement => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/", {replace: true});
  };

  return (
    <Container>
      <Content>
        <Title>페이지를 찾을 수 없습니다.</Title>
        <Message>찾으시는 페이지가 존재하지 않아요.</Message>
        <HomeButton onClick={goHome}>홈으로 이동</HomeButton>
      </Content>
    </Container>
  );
};

export default NotFoundPage;
