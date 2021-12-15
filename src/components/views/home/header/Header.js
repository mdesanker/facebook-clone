import { Fragment, useState } from "react";
import styled from "styled-components";
import RoundBtn from "../../../elements/RoundBtn";
import OptionsMenu from "../popups/OptionsMenu";
import CenterNav from "./CenterNav";
import Logo from "./Logo";
import ProfileTab from "./ProfileTab";
import SearchBtn from "./SearchBtn";

const Header = () => {
  const [optionsVisible, setOptionsVisible] = useState(true);

  return (
    <Fragment>
      {optionsVisible && <OptionsMenu />}
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
          <RoundBtn icon="down" gray />
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
  z-index: -1;
`;

export default Header;
