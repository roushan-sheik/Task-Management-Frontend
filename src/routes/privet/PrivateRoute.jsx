import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import MySpinner from "../../components/loadingSpinner/Spinner";
import useUserContext from "../../hooks/useUserContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { loading, user } = useUserContext();
  if (loading) {
    return <MySpinner />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
