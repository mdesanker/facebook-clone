import styled from "styled-components";
import Card from "../../../elements/Card";

const NewPost = () => {
  return (
    <Wrapper>
      <Card width="500px" padding="12px 16px 10px" content>
        <TopContainer>
          <ProfileIcon />
          <NewPostButton>What's on your mind, Michael?</NewPostButton>
        </TopContainer>
      </Card>
    </Wrapper>
  );
};

const NewPostButton = styled.button`
  flex-grow: 1;
  height: 40px;
  text-align: left;
  font-size: 16px;
  color: #65676b;
  padding: 11px;
  border: none;
  border-radius: 20px;
`;

const ProfileIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: pink;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Wrapper = styled.div``;

export default NewPost;
