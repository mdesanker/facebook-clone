import { Fragment, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Card from "../../../elements/Card";
import RoundBtn from "../../../elements/RoundBtn";
import DropdownBtn from "./DropdownBtn";

const OptionsMenu = () => {
  const dropdownRef = useRef();

  const [isVisible, setIsVisible] = useState(false);

  const clickHandler = () => {
    setIsVisible(!isVisible);
  };

  console.log("ref", dropdownRef.current);

  useEffect(() => {
    const outsideClickEvent = (e) => {
      console.log(e.target);
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
      <RoundBtn icon="down" gray onClick={clickHandler} />
      {isVisible &&
        ReactDOM.createPortal(
          <div ref={dropdownRef}>
            <DropDown />
          </div>,
          document.querySelector("#modal")
        )}
    </OptionsContainer>
  );
};

const DropDown = () => {
  return (
    <Card
      width="360px"
      padding="8px"
      custom="position: absolute; top: 65px; right: 10px; z=index: 500;"
    >
      <DropdownBtn text="Log Out" icon="exit" />
    </Card>
  );
};

const OptionsContainer = styled.div`
  // z-index: 100;
`;

export default OptionsMenu;
