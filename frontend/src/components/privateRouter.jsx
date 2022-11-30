import { Navigate, Outlet } from "react-router";
import { Login } from "../pages";
import { useAuthProvider } from "../providers/AuthProvider";
import { RoutesComponent } from "../routes";

export const PrivateRouter = () => {
	const {  token: { userToken}} =
		useAuthProvider();

	// if(!islogin) setOpenLogin(true);
	return userToken ? <RoutesComponent /> : <Navigate to="/" />;
};
