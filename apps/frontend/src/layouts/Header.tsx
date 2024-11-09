import {ReactElement} from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import DatarizeLogo from "@/components/logo/DatarizeLogo.tsx";
import { Link } from "react-router-dom";
import { HeaderContainer, IconWrapper } from './styled/Header.styled.ts';

export const Header = (): ReactElement => {
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <DatarizeLogo />
      </Link>
      <div className="header-box">
        <IconWrapper>
          <FaBell className="icon" />
          <FaUserCircle className="icon" />
        </IconWrapper>
        <div>전다훈</div>
      </div>
    </HeaderContainer>
  );
};
