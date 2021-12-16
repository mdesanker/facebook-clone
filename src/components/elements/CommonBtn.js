import styled, { css } from "styled-components";

const CommonBtn = ({ text, icon, onClick, primary }) => {
  const icons = {
    pencil: <i className="fas fa-pencil-alt" />,
    plus: <i className="fas fa-plus-circle" />,
  };

  return (
    <BtnWrapper onClick={onClick} primary={primary}>
      {icons[icon]}
      {text}
    </BtnWrapper>
  );
};

const BtnWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #050505;
  background-color: #e4e6eb;
  padding: 10px;
  border: none;
  border-radius: 8px;

  ${(props) =>
    props.primary &&
    css`
      color: white;
      background-color: ${({ theme }) => theme.colors.primary};
    `}
`;

export default CommonBtn;
