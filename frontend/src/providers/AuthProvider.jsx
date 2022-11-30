import { createContext, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router";
import { Orders, Login } from "../pages";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState("");
  const [detail, setDetail] = useState({});
  const store = {
    userDetail: { detail, setDetail },
    token: { userToken, setUserToken },
  };
  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};
export const useAuthProvider = () => useContext(AuthContext);
