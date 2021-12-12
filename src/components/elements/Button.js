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
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 200ms;

  ${(props) =>
    props.primary &&
    css`
      font-size: 1rem;
      background-color: ${({ theme }) => theme.colors.primary};

      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryHover};
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      font-size: 0.8rem;
      background-color: ${({ theme }) => theme.colors.secondary};

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryHover};
      }
    `}
`;

export default Button;
