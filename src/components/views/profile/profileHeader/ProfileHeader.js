import styled from "styled-components";
import CommonBtn from "../../../elements/CommonBtn";
import Background from "../../../../images/background.jpg";

const ProfileHeader = () => {
  return (
    <Wrapper>
      <Container>
        <BackgroundContainer />
        <NamePlate>
          <div>
            <h1>Michael Desanker</h1>
            <h3>214 Friends</h3>
          </div>
          <div>
            <CommonBtn text="Add to story" icon="plus" primary />
            <CommonBtn text="Edit profile" icon="pencil" />
          </div>
        </NamePlate>
      </Container>
    </Wrapper>
  );
};

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
  width: 100%;
  max-width: 970px;
  margin: 0 auto;
  background-color: white;
`;

const Wrapper = styled.section`
  position: relative;
  width: 100%;
`;

export default ProfileHeader;