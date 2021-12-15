import { Fragment, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Card from "../../../elements/Card";
import RoundBtn from "../../../elements/RoundBtn";

const OptionsMenu = () => {
  const dropDownRef = useRef();

  const [isVisible, setIsVisible] = useState(false);

  const clickHandler = () => {
    setIsVisible(!isVisible);
  };

  console.log("ref", dropDownRef.current);

  useEffect(() => {
    const outsideClickEvent = (e) => {
      console.log(e.target);
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
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
          <div ref={dropDownRef}>
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
      custom="position: absolute; top: 65px; right: 10px; z=index: 500;"
    >
      Menu
    </Card>
  );
};

const OptionsContainer = styled.div`
  // z-index: 100;
`;

export default OptionsMenu;
