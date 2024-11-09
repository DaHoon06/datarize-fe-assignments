import { ReactElement } from "react";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import { SideBarContainer } from "@/layouts/styled/SideBar.styled.ts";

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
          <Link to={'/'}>
            <MdHome size={20} color="#222" />
            Home
          </Link>
        </li>
      </ul>
    </SideBarContainer>
  );
};
