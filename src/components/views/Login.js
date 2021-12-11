import { Fragment } from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Fragment>
      <LoginWrapper>Placeholder</LoginWrapper>
      <Footer>mdesanker © 2021</Footer>
    </Fragment>
  );
};

const LoginWrapper = styled.main`
  min-height: 860px;
  padding-bottom: 160px;
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
