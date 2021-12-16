import { Fragment, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../../../elements/Card";
import RoundBtn from "../../../elements/RoundBtn";
import DropdownBtn from "./DropdownBtn";

import { signOut } from "firebase/auth";
import { auth } from "../../../../config/firebase";
import ProfileBtn from "./ProfileBtn";

const OptionsMenu = () => {
  const dropdownRef = useRef();

  const [isVisible, setIsVisible] = useState(false);

  const dropdownVisibleHandler = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const outsideClickEvent = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      window.addEventListener("click", outsideClickEvent);
    }

    return () => {
      window.removeEventListener("click", outsideClickEvent);
    };
  }, [isVisible]);

  return (
    <Fragment>
      <RoundBtn
        icon="down"
        gray
        active={isVisible}
        onClick={dropdownVisibleHandler}
      />
      {isVisible &&
        ReactDOM.createPortal(
          <div ref={dropdownRef}>
            <DropDown onSelect={dropdownVisibleHandler} />
          </div>,
          document.querySelector("#modal")
        )}
    </Fragment>
  );
};

const DropDown = ({ onSelect }) => {
  const logOutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("user signed out");
        onSelect();
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <Card
      width="360px"
      padding="8px"
      custom="position: absolute; top: 65px; right: 10px; z=index: 500;"
    >
      <SectionWrapper>
        <ProfileBtn />
      </SectionWrapper>
      <DropdownBtn onClick={logOutHandler} text="Log Out" icon="exit" />
    </Card>
  );
};

const SectionWrapper = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
  margin-bottom: 10px;
`;

export default OptionsMenu;
