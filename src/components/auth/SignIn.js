import styled from "styled-components";
import Button from "../elements/Button";
import Card from "../elements/Card";

const Signin = () => {
  return (
    <Card padding="1rem">
      <SigninWrapper>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="button" text="Log In" primary />
        <a href="/">Forgot password?</a>
      </SigninWrapper>
      <SignupWrapper>
        <Button type="button" text="Create New Account" secondary />
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

const SigninWrapper = styled.div`
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
