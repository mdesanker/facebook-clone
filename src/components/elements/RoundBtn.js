import styled, { css } from "styled-components";

const RoundBtn = ({ icon, clear, gray }) => {
  const icons = {
    ellipsis: <i className="fas fa-ellipsis-h" />,
    down: <i className="fas fa-caret-down" />,
  };

  return (
    <ButtonWrapper clear={clear} gray={gray}>
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
`;

export default RoundBtn;
