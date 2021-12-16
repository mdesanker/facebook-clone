import styled from "styled-components";

const DropdownBtn = ({ text, icon, onClick }) => {
  const icons = {
    exit: <Icon className="fas fa-sign-out-alt" />,
  };

  return (
    <BtnWrapper onClick={onClick}>
      {icons[icon]}
      <Text>{text}</Text>
    </BtnWrapper>
  );
};

const Text = styled.p`
  font-size: 16px;
`;

const Icon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  height: 36px;
  width: 36px;
  background-color: #e4e6eb;
  border-radius: 50%;
`;

const BtnWrapper = styled.button`
  width: 344px;
  height: 52px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: white;
  padding: 0 10px;
  border: none;
  border-radius: 8px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export default DropdownBtn;
