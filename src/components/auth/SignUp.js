import { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "../elements/Card";
import Overlay from "../elements/Overlay";
import styled from "styled-components";
import Button from "../elements/Button";

const SignUpModal = () => {
  return (
    <ModalWrapper>
      <Card radius="0 0 8px 8px" padding="0">
        <Header>
          <div>
            <h1>Sign Up</h1>
            <p>It's quick and easy.</p>
          </div>
          <button>
            <i className="fas fa-times"></i>
          </button>
        </Header>
        <Body>
          <TextInput>
            <div>
              <input
                type="text"
                id="first"
                name="first"
                placeholder="First name"
                required
              />
              <input
                type="text"
                id="last"
                name="last"
                placeholder="Last name"
                required
              />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </TextInput>
          <BirthdayInput>
            <label htmlFor="birthday">
              Birthday{" "}
              <abbr title="You can choose whether to share your birthday with other users">
                <i className="fas fa-question-circle" />
              </abbr>
            </label>
            <input type="date" id="birthday" name="birthday" required />
          </BirthdayInput>
          <GenderInput>
            <p>
              Gender{" "}
              <abbr title="You can choose whether to share your gender with other users">
                <i className="fas fa-question-circle" />
              </abbr>
            </p>
            <RadioWrapper>
              <div>
                <label htmlFor="female">Female</label>
                <input type="radio" id="female" name="gender" value="female" />
              </div>
              <div>
                <label htmlFor="male">Male</label>
                <input type="radio" id="male" name="gender" value="male" />
              </div>
              <div>
                <label htmlFor="custom">Custom</label>
                <input type="radio" id="custom" name="gender" value="custom" />
              </div>
            </RadioWrapper>
          </GenderInput>
          <ButtonWrapper>
            <Button
              type="submit"
              padding="11px 70px"
              text="Sign Up"
              secondary
            />
          </ButtonWrapper>
        </Body>
      </Card>
    </ModalWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

const RadioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  & div {
    font-size: 15px;
    padding: 11px;
    border-radius: 5px;
    border: 1px solid lightgray;
    flex-grow: 1;

    display: flex;
    justify-content: space-between;
  }
`;

const GenderInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & p {
    font-size: 12px;
    color: gray;
  }
`;

const BirthdayInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & input {
    font-size: 15px;
    padding: 11px;
    border-radius: 5px;
    border: 1px solid lightgray;
  }

  & label {
    font-size: 12px;
    color: gray;
  }
`;

const TextInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & div {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  & input {
    width: 100%;
    flex-grow: 1;
    font-size: 15px;
    padding: 11px;
    background-color: ${({ theme }) => theme.colors.lightGray};
    border: thin solid lightgray;
    border-radius: 5px;
  }
`;

const Body = styled.form`
  width: 432px;
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Header = styled.div`
  width: 432px;
  height: 80px;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};

  & p {
    color: gray;
    font-size: 14px;
    padding-top: 3px;
  }

  & button {
    font-size: 1.5rem;
    color: gray;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  & input:focus {
    outline: none;
  }
`;

const SignUp = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<SignUpModal />, document.querySelector("#modal"))}
      {ReactDOM.createPortal(<Overlay />, document.querySelector("#overlay"))}
    </Fragment>
  );
};

export default SignUp;
