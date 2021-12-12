import styled, { css } from "styled-components";

const Button = ({ text, type, padding, onClick, primary, secondary }) => {
  return (
    <ButtonWrapper
      type={type}
      padding={padding}
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
  padding: ${(props) => (props.padding ? props.padding : "1rem")};

  ${(props) =>
    props.primary &&
    css`
      font-size: 1.2rem;
      background-color: ${({ theme }) => theme.colors.primary};

      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryHover};
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      font-size: 1rem;
      background-color: ${({ theme }) => theme.colors.secondary};

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryHover};
      }
    `}
`;

export default Button;
