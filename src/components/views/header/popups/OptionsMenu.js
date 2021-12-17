import { Fragment, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../../../elements/Card";
import RoundBtn from "../../../elements/RoundBtn";
import DropdownBtn from "./DropdownBtn";

import { signOut } from "firebase/auth";
import { auth } from "../../../../config/firebase";
import ProfileBtn from "./ProfileBtn";

const OptionsMenu = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef();

  const [isVisible, setIsVisible] = useState(false);

  const dropdownVisibleHandler = () => {
    setIsVisible(!isVisible);
  };

  const profileNavHandler = () => {
    navigate("/profile");
    setIsVisible(false);
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
            <DropDown
              onProfile={profileNavHandler}
              onSelect={dropdownVisibleHandler}
            />
          </div>,
          document.querySelector("#modal")
        )}
    </Fragment>
  );
};

const DropDown = ({ onSelect, onProfile }) => {
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
      custom="position: fixed; top: 65px; right: 10px; z-index: 500;"
    >
      <SectionWrapper>
        <ProfileBtn onClick={onProfile} />
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
