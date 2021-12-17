import styled from "styled-components";
import { NavLink } from "react-router-dom";

const CenterNav = () => {
  return (
    <CenterNavWrapper>
      <StyledLink to="/">
        <i className="fas fa-home" />
      </StyledLink>
      <StyledLink to="/watch">
        <i className="fas fa-tv" />
      </StyledLink>
      <StyledLink to="/market">
        <i className="fas fa-store" />
      </StyledLink>
      <StyledLink to="/groups">
        <i className="fas fa-users" />
      </StyledLink>
    </CenterNavWrapper>
  );
};

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: gray;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 80px;
  border: 3px solid transparent;

  &:hover {
    background-color: #efefef;
    border-radius: 15px;
    border: 5px solid white;
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  }

  &.active:hover {
    background-color: white;
    border-radius: 0;
    border: 3px solid white;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  }
`;

const CenterNavWrapper = styled.div`
  height: 100%;
  display: flex;
  // border: 1px solid red;
`;

export default CenterNav;
