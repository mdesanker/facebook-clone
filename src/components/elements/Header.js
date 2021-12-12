import styled from "styled-components";
import Logo from "./Logo";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderSection>
        <Logo />
      </HeaderSection>
    </HeaderWrapper>
  );
};

const HeaderSection = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;

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
