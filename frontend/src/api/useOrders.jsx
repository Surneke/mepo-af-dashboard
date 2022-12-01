import { getApi } from "../utils/fetchData";
import { GlobalProvider } from "../context/GlobalContext";

export const useOrders = () => {
    const {
        orders: { setOrders }
    } = GlobalProvider();
    const changeOrderStatus = async () => { };
    const getOrders = async () => {
        try {
            const res = await getApi("/order")
            setOrders(res.data.allOrders);
        } catch (error) {
            console.log(error)
        }
    };
    return { changeOrderStatus, getOrders };
}

