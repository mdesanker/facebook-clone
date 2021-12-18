import { Fragment } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../header/Header";
import NewPost from "./newPost/NewPost";
import Post from "./post/Post";

const Home = () => {
  const users = useSelector((state) => state.users.users);
  console.log(users);

  return (
    <Fragment>
      <Header />
      <HomeWrapper>
        <NavigationColumn>Links</NavigationColumn>
        <FeedColumn>
          <NewPost />
          <Post />
        </FeedColumn>
        <ChatColumn>Friend list</ChatColumn>
      </HomeWrapper>
    </Fragment>
  );
};

const ChatColumn = styled.section``;

const FeedColumn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const NavigationColumn = styled.section`
  @media (max-width: 1000px) {
    display: none;
  }
`;

const HomeWrapper = styled.main`
  width: 100%;
  padding-top: 80px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    justify-content: space-evenly;
  }
`;

export default Home;
