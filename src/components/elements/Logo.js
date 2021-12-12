import styled from "styled-components";

const Logo = () => {
  return (
    <LogoWrapper>
      <i className="fab fa-facebook" />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  font-size: 40px;
  background: linear-gradient(to bottom, #60a2f7, #1877f2);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin: 0 16px;
`;

export default Logo;
