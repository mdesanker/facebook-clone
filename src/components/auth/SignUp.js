import { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "../elements/Card";
import Overlay from "../elements/Overlay";
import styled from "styled-components";

const SignUp = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<SignUpModal />, document.querySelector("#modal"))}
      {ReactDOM.createPortal(<Overlay />, document.querySelector("#overlay"))}
    </Fragment>
  );
};

const SignUpModal = () => {
  return null;
};

export default SignUp;
