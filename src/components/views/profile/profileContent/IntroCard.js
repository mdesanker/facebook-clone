import styled from "styled-components";
import Card from "../../../elements/Card";
import CommonBtn from "../../../elements/CommonBtn";

const IntroCard = () => {
  return (
    <Card
      width="360px"
      custom="display: flex; flex-direction: column; gap: 15px;"
      feed
    >
      <h3>Intro</h3>
      <CommonBtn text="Add Bio" />
      <Details>
        <i className="fas fa-graduation-cap"></i>
        Studies at <strong>University</strong>
      </Details>
      <Details>
        <i className="fas fa-home"></i>
        Lives in <strong>City, State</strong>
      </Details>
      <CommonBtn text="Edit Details" />
      <CommonBtn text="Add Hobbies" />
      <CommonBtn text="Add Featured" />
    </Card>
  );
};

const Details = styled.p`
  display: flex;
  font-size: 16px;
  gap: 8px;

  & i {
    color: gray;
  }
`;

export default IntroCard;
