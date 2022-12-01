import { createContext, useContext, useState } from "react";

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
