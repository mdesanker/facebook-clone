import styled from "styled-components";
import ProfileIcon from "../../../elements/ProfileIcon";
import RoundBtn from "../../../elements/RoundBtn";

const PostHeader = () => {
  return (
    <Wrapper>
      <ProfileIcon />
      <HeaderText>
        <h3>Michael Creator</h3>
        <p>
          1h &#183; &nbsp;
          <i className="fas fa-globe-americas" />
        </p>
      </HeaderText>
      <RoundBtn icon="ellipsis" clear />
    </Wrapper>
  );
};

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-grow: 1;
  height: 100%;

  & h3 {
    font-size: 16px;
  }

  & p {
    font-size: 14px;
    color: gray;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 12px 16px 12px;
`;

export default PostHeader;
