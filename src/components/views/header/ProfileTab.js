import styled from "styled-components";

const ProfileTab = () => {
  return (
    <TabWrapper>
      <Image />
      Michael
    </TabWrapper>
  );
};

const Image = styled.div`
  height: 28px;
  width: 28px;
  border-radius: 50%;
  // object-fit: cover;
  background-color: pink;
`;

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
