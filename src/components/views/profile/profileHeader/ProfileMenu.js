import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ProfileMenu = () => {
  return (
    <MenuWrapper>
      <li>
        <StyledLink activeClassName="active" to="/profile/posts">
          Posts
        </StyledLink>
      </li>
      <li>
        <StyledLink activeClassName="active" to="/profile/about">
          About
        </StyledLink>
      </li>
      <li>
        <StyledLink activeClassName="active" to="/profile/friends">
          Friends
        </StyledLink>
      </li>
      <li>
        <StyledLink activeClassName="active" to="/profile/photos">
          Photos
        </StyledLink>
      </li>
      <li>
        <StyledLink activeClassName="active" to="/profile/videos">
          Videos
        </StyledLink>
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

  &.active {
    color: ${({ theme }) => theme.colors.primary};
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
