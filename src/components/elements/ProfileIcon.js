import styled, { css } from "styled-components";

const ProfileIcon = ({ size }) => {
  return <IconWrapper size={size}></IconWrapper>;
};

const IconWrapper = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: pink;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.size &&
    css`
      height: ${props.size};
      width: ${props.size};
    `};
`;

export default ProfileIcon;
