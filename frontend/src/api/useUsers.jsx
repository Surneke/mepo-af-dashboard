import { getApi } from "../utils/fetchData";
import { useGlobalProvider } from "../context/GlobalContext";

export const useUsers = () => {
  const {
    users: { setUsers },
  } = useGlobalProvider();

  const getUsers = async () => {
    try {
      const res = await getApi("/users?role=User");
      const res2 = await getApi("/users?role=Admin");

      // console.log(res, "gfvhgyj");
      setUsers(res2.data.allUsers);
      setUsers(res.data.allUsers);
    } catch (error) {
      console.log(error);
    }
  };
  return { getUsers };
};
//
