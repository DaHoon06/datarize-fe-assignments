import styled from "styled-components";
import {ReactElement} from "react";
import DatarizeLogo from "../components/logo/DatarizeLogo.tsx";
import { MdHome } from "react-icons/md";
const SideBarContainer = styled.aside`
    width: 200px;
    height: 100%;
    background: #F8FFA5FF;
    position: fixed;
    padding: 0 1em;

    .logo-box {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    
    ul li {
        margin: 0.4em 0;
        border: 1px solid transparent;
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 1em;
        color: #222;
    }
    .active {
        background-color: #fff;
        border-radius: 10px;
    }
`;

export const SideBar = (): ReactElement => {
  return (
    <SideBarContainer>
      <div className={'logo-box'}>
      </div>
      <ul>
        <li className={'active'}>
          <MdHome size={20} color={'#222'} />
        </li>
        <li>2</li>
      </ul>
    </SideBarContainer>
  )
}
