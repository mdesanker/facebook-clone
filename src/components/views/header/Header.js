import { Fragment } from "react";
import styled from "styled-components";
import OptionsMenu from "./popups/OptionsMenu";
import CenterNav from "./CenterNav";
import Logo from "./Logo";
import ProfileTab from "./ProfileTab";
import SearchBtn from "./SearchBtn";

const Header = () => {
  return (
    <Fragment>
      <HeaderWrapper>
        <HeaderSection>
          <Logo />
          <SearchBtn />
        </HeaderSection>
        <HeaderSection>
          <CenterNav />
        </HeaderSection>
        <HeaderSection>
          <ProfileTab />
          <OptionsMenu />
        </HeaderSection>
      </HeaderWrapper>
    </Fragment>
  );
};

const HeaderSection = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 16px;

  // border: 1px solid red;
`;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
