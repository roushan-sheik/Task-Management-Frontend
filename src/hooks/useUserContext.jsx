import React from "react";
import { authContext } from "../provider/auth-provider/AuthProvider";
const useUserContext = () => {
  const auth = React.useContext(authContext);
  return auth;
};

export default useUserContext;
