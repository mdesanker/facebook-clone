import React, { useState } from "react";
import SignUp from "./components/auth/SignUp";
import Home from "./components/views/home/Home";
import Login from "./components/views/Login";
import GlobalStyles from "./themes/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/views/home/header/Header";

function App() {
  const [signUpVisible, setSignUpVisible] = useState(false);

  const showSignUpHandler = () => {
    setSignUpVisible(true);
  };

  const closeSignUpHandler = () => {
    setSignUpVisible(false);
  };

  return (
    <Router>
      <GlobalStyles />
      {signUpVisible && <SignUp onClose={closeSignUpHandler} />}
      <Header />
      <Routes>
        <Route
          path="/login"
          element={<Login onCreateAccount={showSignUpHandler} />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
