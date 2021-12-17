import styled from "styled-components";
import NewPost from "../../home/newPost/NewPost";
import IntroCard from "./IntroCard";

const ProfileContent = () => {
  return (
    <Wrapper>
      <LeftColumn>
        <IntroCard />
      </LeftColumn>
      <RightColumn>
        <NewPost />
      </RightColumn>
    </Wrapper>
  );
};

const RightColumn = styled.div``;

const LeftColumn = styled.div``;

const Wrapper = styled.section`
  width: 100%;
  max-width: 910px;
  margin: 0 auto;
  padding-top: 15px;

  display: flex;
  justify-content: space-evenly;
`;

export default ProfileContent;
