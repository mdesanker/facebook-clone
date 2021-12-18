import styled from "styled-components";
import CommonBtn from "../../../elements/CommonBtn";
import Background from "../../../../images/background.jpg";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";

const ProfileHeader = () => {
  const userId = useSelector((state) => state.auth.value);

  const userData = useSelector((state) => state.users.users).find(
    (user) => user.id === userId
  );

  return (
    <Wrapper>
      <Container>
        <BackgroundContainer />
        <ProfilePic />
        <NamePlate>
          <div>
            <h1>{userData && `${userData.first} ${userData.last}`}</h1>
            <h3>214 Friends</h3>
          </div>
          <div>
            <CommonBtn text="Add to story" icon="plus" primary />
            <CommonBtn text="Edit profile" icon="pencil" />
          </div>
        </NamePlate>
        <ProfileMenu />
      </Container>
    </Wrapper>
  );
};

const ProfilePic = styled.div`
  position: absolute;
  top: 300px;
  left: 30px;
  height: 168px;
  width: 168px;
  border-radius: 50%;
  border: 5px solid white;
  background-color: pink;
  z-index: 10;
`;

const NamePlate = styled.div`
  height: 145px;
  display: flex;
  padding-left: 200px;
  border-bottom: 1px solid lightgray;
  margin: 0 20px;

  & div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    & h3 {
      color: gray;
    }
  }

  & div:nth-child(2) {
    flex-grow: 1;
    padding-bottom: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 10px;
  }
`;

const BackgroundContainer = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 0 0 10px 10px;
  background: url(${Background});
  background-size: cover;
  background-position: center;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 970px;
  margin: 0 auto;
`;

const Wrapper = styled.section`
  width: 100%;
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
`;

export default ProfileHeader;
