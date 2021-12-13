import styled from "styled-components";

const PostContent = ({ children }) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};

const ContentWrapper = styled.div`
  padding: 4px 16px 16px;
`;

export default PostContent;
