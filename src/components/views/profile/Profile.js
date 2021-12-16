import { Fragment } from "react";
import styled from "styled-components";
import Header from "../header/Header";

const Profile = () => {
  return (
    <Fragment>
      <Header />
      <ProfileWrapper></ProfileWrapper>
    </Fragment>
  );
};

const ProfileWrapper = styled.main`
  width: 100%;
  padding-top: 80px;
  display: flex;
`;

export default Profile;
