import Orders from "./pages/orders";
import Login from "./pages/login";
import { useEffect } from "react";
import { useAuth } from "./api/useAuth";
import { useAuthProvider } from "./context/AuthProvider";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CustomizingPageRouter } from "./custom/CustomizingPageRouter";

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
        <Route path="/:page" element={<CustomizingPageRouter />} />
      </Routes>
    </BrowserRouter>
  );
};
