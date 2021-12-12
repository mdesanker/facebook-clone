import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderSection></HeaderSection>
    </HeaderWrapper>
  );
};

const HeaderSection = styled.div``;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`;

export default Header;
