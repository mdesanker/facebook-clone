import styled, { css } from "styled-components";

const Button = ({ text, type, onClick, primary, secondary }) => {
  return (
    <ButtonWrapper
      type={type}
      onClick={onClick}
      primary={primary}
      secondary={secondary}
    >
      {text}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 200ms;

  ${(props) =>
    props.primary &&
    css`
      font-size: 1.2rem;
      background-color: ${({ theme }) => theme.colors.primary};
      padding: 0.5rem 2rem;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryHover};
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      font-size: 16px;
      background-color: ${({ theme }) => theme.colors.secondary};
      padding: 1rem;

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryHover};
      }
    `}
`;

export default Button;
