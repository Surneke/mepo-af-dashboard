import { getApi, patchApi } from "../utils/fetchData";
import { useGlobalProvider } from "../context/GlobalContext";

export const useOrders = () => {
  const {
    orders: { setOrders },
  } = useGlobalProvider();

  const changeOrderStatus = async (status, id) => {
    console.log(status, id);
    try {
      await patchApi(`/order/${id}`, { orderStatus: status });
    } catch (error) {
      console.log(error);
    }
  };

  const getOrders = async () => {
    try {
      const res = await getApi("/order");
      setOrders(res.data.allOrders);
    } catch (error) {
      console.log(error);
    }
  };
  return { changeOrderStatus, getOrders };
};
//
