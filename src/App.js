import React, { Fragment, useEffect } from "react";
import Home from "./components/views/home/Home";
import Login from "./components/views/Login";
import GlobalStyles from "./themes/GlobalStyles";
import { Routes, Route, useNavigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { saveUser } from "./store/authSlice";

import ProtectedRoute from "./utils/ProtectedRoute";
import Profile from "./components/views/profile/Profile";

function App() {
  const navigate = useNavigate();
  // const user = useSelector((state) => state.auth.value);
  // console.log("user from state", user);

  const dispatch = useDispatch();

  // Save user token to redux state
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(saveUser(user.uid));
        console.log("User object", user);
        navigate("/");
      } else {
        dispatch(saveUser(undefined));
      }
    });
  }, [auth, dispatch]);

  return (
    <Fragment>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/*" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Fragment>
  );
}

export default App;
