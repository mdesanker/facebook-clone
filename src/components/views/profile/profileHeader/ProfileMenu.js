import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ProfileMenu = () => {
  return (
    <MenuWrapper>
      <li>
        <ActiveLink to="/profile">Posts</ActiveLink>
      </li>
      <li>
        <StyledLink to="/profile">About</StyledLink>
      </li>
      <li>
        <StyledLink to="/profile">Friends</StyledLink>
      </li>
      <li>
        <StyledLink to="/profile">Photos</StyledLink>
      </li>
      <li>
        <StyledLink to="/profile">Videos</StyledLink>
      </li>
    </MenuWrapper>
  );
};

const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 16px;
  color: #65676b;
  font-weight: bold;
  border: 3px solid transparent;

  &:hover {
    background-color: #efefef;
    border-radius: 15px;
    border: 3px solid white;
  }
`;

const ActiveLink = styled(StyledLink)`
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  }

  &.active:hover {
    background-color: white;
    border-radius: 0px;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  }
`;

const MenuWrapper = styled.ul`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  display: flex;

  & li {
    list-style: none;
  }
`;

export default ProfileMenu;
