import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2em;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

  .header-box {
    display: flex;
    align-items: center;
    gap: 1.5em;
    color: #333;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  .icon {
    font-size: 1.4em;
    cursor: pointer;
    color: #333;
    transition: color 0.3s ease;

    &:hover {
      color: #555;
    }
  }
`;

export {
  IconWrapper, HeaderContainer
}
