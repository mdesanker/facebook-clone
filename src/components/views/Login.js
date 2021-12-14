import { Fragment } from "react";
import styled from "styled-components";
import Signin from "../auth/SignIn";

const Login = ({ onCreateAccount }) => {
  return (
    <Fragment>
      <LoginWrapper>
        <ContentWrapper>
          <Greeting>
            <h1>fakebook</h1>
            <p>Connect with friends and the world around you on Fakebook.</p>
          </Greeting>
          <SigninWrapper>
            <Signin onNewAccount={onCreateAccount} />
            <p>
              <strong>Create a Page</strong> for a celebrity, brand or business.
            </p>
          </SigninWrapper>
        </ContentWrapper>
      </LoginWrapper>
      <Footer>mdesanker © 2021</Footer>
    </Fragment>
  );
};

const Greeting = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 60px;

  & h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 3rem;
  }

  & p {
    font-size: 1.5rem;
  }
`;

const SigninWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & p {
    text-align: center;
    font-size: 14px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
`;

const LoginWrapper = styled.main`
  min-height: 860px;
  padding: 20px 0 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  height: 160px;
  width: 100%;
  color: gray;
  padding: 5rem 2rem 0;
  background-color: white;
`;

export default Login;
