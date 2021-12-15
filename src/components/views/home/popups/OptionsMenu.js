import { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "../../../elements/Card";

const Options = () => {
  return (
    <Card
      width="360px"
      custom="position: fixed; top: 50px; right: 10px; z=index: 500;"
    >
      Menu
    </Card>
  );
};

const OptionsMenu = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Options />, document.querySelector("#modal"))}
    </Fragment>
  );
};

export default OptionsMenu;
