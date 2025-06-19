// components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem("token"); // change as per your auth logic
  return isLoggedIn ? children : <Navigate to="/signin" replace />;
};

export default PrivateRoute;