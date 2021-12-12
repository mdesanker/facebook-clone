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
          <p>Birthday</p>
          <input type="date" id="birthday" name="birthday" />
          <p>Gender</p>
          <div>
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
          </div>
          <Button type="submit" text="Sign Up" secondary />
        </Body>
      </Card>
    </ModalWrapper>
  );
};

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
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
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
