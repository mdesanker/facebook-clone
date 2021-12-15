import React, { useEffect, useState } from "react";
import SignUp from "./components/auth/SignUp";
import Home from "./components/views/home/Home";
import Login from "./components/views/Login";
import GlobalStyles from "./themes/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/views/home/header/Header";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { saveUser } from "./store/authSlice";

import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const [signUpVisible, setSignUpVisible] = useState(false);

  const user = useSelector((state) => state.auth.value);
  console.log("user from state", user);

  const dispatch = useDispatch();

  // Save user token to redux state
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(saveUser(user.refreshToken));
      } else {
        dispatch(saveUser(undefined));
      }
    });
  }, [auth, dispatch]);

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
      <Routes>
        <Route
          path="/"
          element={<Login onCreateAccount={showSignUpHandler} />}
        />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/" element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route
          path="/login"
          element={<Login onCreateAccount={showSignUpHandler} />}
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
