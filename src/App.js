import React, { useEffect } from "react";
import Home from "./components/views/home/Home";
import Login from "./components/views/Login";
import GlobalStyles from "./themes/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { saveUser } from "./store/authSlice";

import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
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

  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
