import styled from "styled-components";

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
            <button>Add to story</button>
            <button>Edit profile</button>
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
  }

  & div:nth-child(2) {
    flex-grow: 1;
    padding: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

const BackgroundContainer = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 0 0 8px 8px;
  border: 1px solid red;
  background: url();
  background-size: cover;
  background-position: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 970px;
  margin: 0 auto;
`;

const Wrapper = styled.section`
  position: relative;
  width: 100%;
`;

export default ProfileHeader;
