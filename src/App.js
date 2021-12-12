import React from "react";
import SignUp from "./components/auth/SignUp";
import Home from "./components/views/Home";
import Login from "./components/views/Login";
import GlobalStyles from "./themes/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      {/* <Login /> */}
      {/* <SignUp /> */}
      <Home />
    </div>
  );
}

export default App;
