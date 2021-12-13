import styled from "styled-components";

const ContentBtn = ({ children, color, small }) => {
  return (
    <BtnWrapper color={color} small={small}>
      {children}
    </BtnWrapper>
  );
};

const BtnWrapper = styled.button`
  flex-grow: 1;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  & i {
    font-size: ${(props) => (props.small ? "18px" : "25px")};
    color: ${(props) => props.color};
  }

  & p {
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGray};
  }

  &:hover {
    background-color: #efefef;
  }
`;

export default ContentBtn;
