import styled from "styled-components";
import Card from "../../../elements/Card";
import ProfileIcon from "../../../elements/ProfileIcon";
import ContentBtn from "../../../elements/ContentBtn";
import { useSelector } from "react-redux";

const NewPost = () => {
  const userId = useSelector((state) => state.auth.value);

  // console.log(userId);

  const userData = useSelector((state) => state.users.users).find(
    (user) => user.id === userId
  );

  // console.log(userData);

  return (
    <Card width="500px" padding="12px 16px 10px" feed>
      <TopContainer>
        <ProfileIcon />
        <NewPostButton>
          What's on your mind, {userData && userData.first}?
        </NewPostButton>
      </TopContainer>
      <BottomContainer>
        <ContentBtn color="rgb(243, 66, 95)">
          <i className="fas fa-video" />
          <p>Live video</p>
        </ContentBtn>
        <ContentBtn color="rgb(69, 189, 98)">
          <i className="far fa-images" />
          <p>Photo/video</p>
        </ContentBtn>
        <ContentBtn color="rgb(247, 185, 40)">
          <i className="far fa-laugh" />
          <p>Feeling/activity</p>
        </ContentBtn>
      </BottomContainer>
    </Card>
  );
};

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
`;

const NewPostButton = styled.button`
  flex-grow: 1;
  height: 40px;
  text-align: left;
  font-size: 16px;
  color: #65676b;
  padding: 11px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

// const ProfileIcon = styled.div`
//   height: 40px;
//   width: 40px;
//   border-radius: 50%;
//   background-color: pink;
// `;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding-bottom: 12px;
  border-bottom: 1px solid lightgray;
`;

export default NewPost;
