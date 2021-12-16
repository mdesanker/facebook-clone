import styled from "styled-components";
import ProfileIcon from "../../../elements/ProfileIcon";

const ProfileBtn = () => {
  return (
    <BtnWrapper>
      <ProfileIcon size="60px" />
      <TextWrapper>
        <h3>Michael Desanker</h3>
        <p>See your profile</p>
      </TextWrapper>
    </BtnWrapper>
  );
};

const TextWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  cursor: pointer;

  & h3 {
    font-size: 20px;
  }

  & p {
    font-size: 14px;
    color: gray;
  }
`;

const BtnWrapper = styled.button`
  width: 344px;
  height: 76px;
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

export default ProfileBtn;
