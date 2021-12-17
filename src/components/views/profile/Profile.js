import { Fragment } from "react";
import styled from "styled-components";
import Header from "../header/Header";
import ProfileContent from "./profileContent/profileContent";
import ProfileHeader from "./profileHeader/ProfileHeader";
import { Routes, Route } from "react-router-dom";

const Profile = () => {
  return (
    <Fragment>
      <Header />
      <ProfileWrapper>
        <ProfileHeader />
        <Routes>
          <Route to="/profile" element={<ProfileContent />} />
        </Routes>
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
