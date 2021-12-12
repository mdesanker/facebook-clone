import React from "react";
import SignUp from "./components/auth/SignUp";
import Home from "./components/views/Home";
import Login from "./components/views/Login";
import GlobalStyles from "./themes/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/elements/header/Header";

function App() {
  return (
    <Router>
      <GlobalStyles />
      {/* <SignUp /> */}
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
