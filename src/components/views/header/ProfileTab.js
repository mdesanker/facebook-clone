import styled from "styled-components";
import ProfileIcon from "../../elements/ProfileIcon";

const ProfileTab = () => {
  return (
    <TabWrapper>
      <ProfileIcon size="28px" />
      Michael
    </TabWrapper>
  );
};

const TabWrapper = styled.button`
  height: 36px;
  padding: 0 12px 0 4px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  border: none;
  border-radius: 18px;
  cursor: pointer;
  margin: 0 16px;

  font-size: 16px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background-color: #efefef;
  }
`;

export default ProfileTab;
