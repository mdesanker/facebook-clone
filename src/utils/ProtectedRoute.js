import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useSelector((state) => state.auth.value);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
