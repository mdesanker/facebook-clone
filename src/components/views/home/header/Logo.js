import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/">
        <i className="fab fa-facebook" />
      </Link>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  font-size: 40px;
  background: ${({ theme }) => theme.gradients.primaryGradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  & a {
    color: transparent;
  }
`;

export default Logo;
