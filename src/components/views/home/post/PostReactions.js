import styled from "styled-components";
import ContentBtn from "../../../elements/ContentBtn";

const PostReactions = () => {
  return (
    <ReactionWrapper>
      <Container>
        <Likes>
          <i className="fas fa-thumbs-up" />
          <p>4 Likes</p>
        </Likes>
        <p>2 Comments</p>
      </Container>
      <Container>
        <ContentBtn color="gray" small>
          <i className="fas fa-thumbs-up" />
          <p>Like</p>
        </ContentBtn>
        <ContentBtn color="gray" small>
          <i className="far fa-comment-alt" />
          <p>Comment</p>
        </ContentBtn>
      </Container>
    </ReactionWrapper>
  );
};

const Likes = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  & i {
    height: 18px;
    width: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    color: white;
    padding: 1px;
    border-radius: 50%;
    background: ${({ theme }) => theme.gradients.primaryGradient};
  }
`;

const Container = styled.div`
  padding: 5px 0;
  margin: 0 16px;
  color: gray;
  font-size: 16px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
`;

const ReactionWrapper = styled.div`
  width: 100%;
`;

export default PostReactions;
