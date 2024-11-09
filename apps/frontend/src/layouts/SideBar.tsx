import styled from "styled-components";
import { ReactElement } from "react";
import { MdHome } from "react-icons/md";
import { motion } from "framer-motion";

const SideBarContainer = styled(motion.aside)`
    width: 200px;
    height: 100%;
    background: #F8FFA5FF;
    position: fixed;
    padding: 0 1em;
    z-index: 10;
    
    //@media screen and (max-width: 765px) {
    //    display: none;
    //}
    
    ul {
        margin-top: 1.25em;
    }
    ul li {
        margin: 0.4em 0;
        border: 1px solid transparent;
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 1em;
        color: #222;
        gap: 10px;
    }

    .active {
        background-color: #fff;
        border-radius: 10px;
    }
`;
interface SideBarProps {
  isVisible: boolean;
}
export const SideBar = ({isVisible}: SideBarProps): ReactElement => {

  return (
    <SideBarContainer
      initial={{ x: 0 }}
      animate={{ x: isVisible ? 0 : -200 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <ul>
        <li className="active">
          <MdHome size={20} color="#222" />
          Home
        </li>
      </ul>
    </SideBarContainer>
  );
};
