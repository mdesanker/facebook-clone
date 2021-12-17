import styled from "styled-components";
import NewPost from "../../home/newPost/NewPost";

const ProfileContent = () => {
  return (
    <Wrapper>
      <LeftColumn></LeftColumn>
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
  max-width: 892px;
  margin: 0 auto;
  padding-top: 10px;

  display: flex;
  justify-content: space-between;
`;

export default ProfileContent;
