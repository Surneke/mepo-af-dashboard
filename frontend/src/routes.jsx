import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Collections, Login, Logout, Orders, Products, Users } from "./pages";
import { Layout } from "./layouts";
import { PrivateRouter, ResponsiveDrawer } from "./components";
import { useAuthProvider } from "./providers/AuthProvider";

export const RoutesComponent = () => {
	const { check, setCheck } = useAuthProvider();
	console.log(check);
	return (
		<BrowserRouter>
			<Routes>
				{check ? (
					<Route path="" element={<Layout />}>
						<Route path="/orders" element={<Orders />} />
						<Route path="/users" element={<Users />} />
						<Route path="/logout" element={<Logout />} />
                        <Route path="/products" element={<Products />} />
						<Route path="/collections" element={<Collections />} />

						{/* <Route path="/users" element={<PrivateRouter />}>
						<Route path="/users" element={<Users />} />
					</Route>
					<Route path="/order" element={<PrivateRouter />}>
						<Route path="/orders" element={<Orders />} />
					</Route>
					<Route path="/products" element={<PrivateRouter />}>
						<Route path="/products" element={<Products />} />
					</Route> */}
					</Route>
				) : (
					<Route path="/" element={<Login />} />
				)}
				<Route path="*" element={<h1>404 PAGE NOT FOUND</h1>} />
			</Routes>
		</BrowserRouter>
	);
};
