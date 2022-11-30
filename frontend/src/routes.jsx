import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Collections, Login, Logout, Orders, Products, Users } from "./pages";
import { Layout } from "./layouts";
import { PrivateRouter } from "./components";
import { useAuthProvider } from "./providers/AuthProvider";
import { useAuth } from "./api/useAuth";
import { useEffect } from "react";

export const RoutesComponent = () => {
  const {
    token: { userToken },
  } = useAuthProvider();
  const userlogged = localStorage.getItem("userLoggedIn");
  const { refreshToken } = useAuth();

  useEffect(() => {
    if (userlogged) {
      refreshToken();
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={userToken ? <Orders /> : <Login />} />
        {/* {userToken ? (
          <Route element={<Layout />}>
            <Route path="/orders" element={<Orders />} />
            <Route path="/users" element={<Users />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/products" element={<Products />} />
            <Route path="/collections" element={<Collections />} />

          
          </Route>
        ) : (
          <Route path="/" element={<Login />} />
        )} */}
        <Route path="*" element={<h1>404 PAGE NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
