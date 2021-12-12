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
  background: linear-gradient(to bottom, #60a2f7, #1877f2);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  & a {
    color: transparent;
  }
`;

export default Logo;
