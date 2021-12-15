import { useState } from "react";
import styled from "styled-components";
import Button from "../elements/Button";
import Card from "../elements/Card";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

const Signin = ({ onClickCreateNewAccount }) => {
  const [loginCredentials, setLoginCredentials] = useState({});

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginCredentials((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(loginCredentials);

    signInWithEmailAndPassword(
      auth,
      loginCredentials.email,
      loginCredentials.password
    )
      .then((cred) => {
        console.log("user logged in", cred.user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <Card padding="1rem">
      <SigninWrapper onSubmit={submitHandler}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={inputChangeHandler}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={inputChangeHandler}
        />
        <Button type="submit" text="Log In" primary />
        <a href="/">Forgot password?</a>
      </SigninWrapper>
      <SignupWrapper>
        <Button
          type="button"
          text="Create New Account"
          onClick={onClickCreateNewAccount}
          padding="15px 25px"
          secondary
        />
      </SignupWrapper>
    </Card>
  );
};

const Input = styled.input`
  font-size: 1rem;
  padding: 1rem;
  width: 360px;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin: 0 0 0.5rem;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const SigninWrapper = styled.form`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid lightgray;

  & a {
    text-decoration: none;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    padding: 1rem 0;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

const SignupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export default Signin;
