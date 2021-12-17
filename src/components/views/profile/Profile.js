import { Fragment } from "react";
import styled from "styled-components";
import Header from "../header/Header";
import ProfileContent from "./profileContent/profileContent";
import ProfileHeader from "./profileHeader/ProfileHeader";

const Profile = () => {
  return (
    <Fragment>
      <Header />
      <ProfileWrapper>
        <ProfileHeader />
        <ProfileContent />
      </ProfileWrapper>
    </Fragment>
  );
};

const ProfileWrapper = styled.main`
  width: 100%;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
`;

export default Profile;
