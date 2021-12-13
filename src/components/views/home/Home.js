import { Fragment } from "react";
import styled from "styled-components";
import Header from "./header/Header";
import NewPost from "./newPost/NewPost";

const Home = () => {
  return (
    <Fragment>
      {/* <Header /> */}
      <HomeWrapper>
        <NewPost />
      </HomeWrapper>
    </Fragment>
  );
};

const HomeWrapper = styled.main`
  width: 100%;
  padding-top: 80px;
  display: flex;
  justify-content: center;
`;

export default Home;
