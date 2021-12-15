import { Fragment } from "react";
import ReactDOM from "react-dom;";
import Card from "../../../elements/Card";

const Options = () => {
  return <Card>Options</Card>;
};

const OptionsMenu = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Options />, document.querySelector("#modal"))}
    </Fragment>
  );
};

export default OptionsMenu;
