import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  console.log("PROTECTED ROUTE");

  const user = useSelector((state) => state.auth.value);

  console.log("User", user);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
