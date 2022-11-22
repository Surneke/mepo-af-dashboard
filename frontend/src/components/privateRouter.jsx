import { Navigate, Outlet } from "react-router";
import { Login } from "../pages";
import { useAuthProvider } from "../providers/AuthProvider";
import { RoutesComponent } from "../routes";

export const PrivateRouter = () => {
	const { islogin, setIsLogin, openLogin, setOpenLogin, check } =
		useAuthProvider();

	// if(!islogin) setOpenLogin(true);
	return check ? <RoutesComponent /> : <Navigate to="/login" />;
};
