import React from "react";
import { Navigate } from "react-router-dom";

const Login = ({ requiredRoles, userRole }) => {
  return (
    <div>
      {!requiredRoles.includes(userRole) ? <Navigate to="/login" /> : "Login"}
    </div>
  );
};

export default Login;
