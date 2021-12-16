import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Card from "../../../elements/Card";
import RoundBtn from "../../../elements/RoundBtn";
import DropdownBtn from "./DropdownBtn";

import { signOut } from "firebase/auth";
import { auth } from "../../../../config/firebase";

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
    <OptionsContainer>
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
    </OptionsContainer>
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
      <DropdownBtn onClick={logOutHandler} text="Log Out" icon="exit" />
    </Card>
  );
};

const OptionsContainer = styled.div`
  // z-index: 100;
`;

export default OptionsMenu;