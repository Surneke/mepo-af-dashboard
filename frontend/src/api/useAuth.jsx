import { postApi, getApi } from "../utils/fetchData";
import { useAuthProvider } from "../providers/AuthProvider";

export const useAuth = () => {
  const {
    userDetail: { setDetail },
    token: { setUserToken },
  } = useAuthProvider();

  const login = async (data) => {
    try {
      const res = await postApi("/api/login", data);
      setDetail(res.data.user);
      setUserToken(res.data.token);
      localStorage.setItem("userLoggedIn", "true");
    } catch (error) {
      console.log(error);
    }
  };

  const refreshToken = async () => {
    try {
      const res = await getApi("/api/refresh_token");
      setDetail(res.data.user);
      setUserToken(res.data.token);
    } catch (error) {
      console.log(error);
    }
  };
  return { login, refreshToken };
};
