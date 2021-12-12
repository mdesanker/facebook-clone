import React from "react";
import SignUp from "./components/auth/SignUp";
import Login from "./components/views/Login";
import GlobalStyles from "./themes/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Login />
      <SignUp />
    </div>
  );
}

export default App;
