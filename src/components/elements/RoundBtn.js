import styled, { css } from "styled-components";

const RoundBtn = ({ icon, clear, gray, active, onClick }) => {
  const icons = {
    ellipsis: <i className="fas fa-ellipsis-h" />,
    down: <i className="fas fa-caret-down" />,
  };

  return (
    <ButtonWrapper clear={clear} gray={gray} active={active} onClick={onClick}>
      {icons[icon]}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  font-size: 20px;
  color: gray;

  ${(props) =>
    props.clear &&
    css`
      background-color: white;

      &:hover {
        background-color: #efefef;
      }
    `};

  ${(props) =>
    props.gray &&
    css`
      background-color: #efefef;

      &:hover {
        background-color: #e5e5e5;
      }
    `};

  ${(props) =>
    props.active &&
    css`
      background-color: #e7f3ff;
      color: ${({ theme }) => theme.colors.primary};

      &:hover {
        background-color: #dbedff;
      }
    `};
`;

export default RoundBtn;
