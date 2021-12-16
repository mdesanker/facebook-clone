import { Fragment } from "react";
import styled from "styled-components";
import Header from "../header/Header";
import ProfileHeader from "./profileHeader/ProfileHeader";

const Profile = () => {
  return (
    <Fragment>
      <Header />
      <ProfileWrapper>
        <ProfileHeader />
      </ProfileWrapper>
    </Fragment>
  );
};

const ProfileWrapper = styled.main`
  width: 100%;
  padding-top: 60px;
  display: flex;
`;

export default Profile;
