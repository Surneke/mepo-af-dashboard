import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router";
import { Orders, Login } from "../pages";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
	const [check, setCheck] = useState(false);
	// const [user, setUser] = useState(false);
	// const [islogin, setIsLogin] = useState(false);
	// const [openLogin,setOpenLogin] = useState(false);
	// const [cookies, setCookie, removeCookie] = useCookies(["token"]);
	// useEffect(() => {
	//     if(setCookie("token")) {
	//         setUser(true);
	//     } else {
	//         setUser(false);
	//     }
	//     setChecking(false);
	// },[]);
	return (
		<AuthContext.Provider
			value={{ check, setCheck }}
		>
			{/* {!checking && <Navigate to="/orders"/>}
            {checking && <Login/>} */}
			{children}
		</AuthContext.Provider>
	);
};
export const useAuthProvider = () => useContext(AuthContext);
