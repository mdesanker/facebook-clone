import styled, { css } from "styled-components";

const RoundBtn = ({ icon, clear, gray }) => {
  const icons = {
    ellipsis: <i className="fas fa-ellipsis-h" />,
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

  font-size: 15px;
  color: gray;

  ${(props) =>
    props.clear &&
    css`
      background-color: white;

      &:hover {
        background-color: #efefef;
      }
    `};
`;

export default RoundBtn;
