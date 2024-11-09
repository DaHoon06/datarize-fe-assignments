import styled from "styled-components";

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

export {
  Main, Container, BaseContainer
}
