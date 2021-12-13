import styled from "styled-components";

const PostReactions = () => {
  return (
    <ReactionWrapper>
      <Counter>
        <Likes>
          <i className="fas fa-thumbs-up" />
          <p>4 Likes</p>
        </Likes>
      </Counter>
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

const Counter = styled.div`
  padding: 10px 0;
  margin: 0 16px;
  color: gray;
  font-size: 16px;
  border-bottom: 1px solid lightgray;
`;

const ReactionWrapper = styled.div`
  width: 100%;
`;

export default PostReactions;
