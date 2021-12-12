import React from "react";
import SignUp from "./components/auth/SignUp";
import Home from "./components/views/Home";
import Login from "./components/views/Login";
import GlobalStyles from "./themes/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyles />
      {/* <SignUp /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
