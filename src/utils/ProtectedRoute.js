import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
//   const user = useSelector((state) => state.auth.value);
//   console.log("User", user);

//   return (
//     <Route
//       {...restOfProps}
//       render={(props) => {
//         user ? <Component {...props} /> : <Navigate to="/" />;
//       }}
//     />
//   );
// };

const ProtectedRoute = () => {
  const user = useSelector((state) => state.auth.value);

  console.log("User", user);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
