import { useEffect } from "react";
import { useOrders } from "../api/useOrders";
import { Box } from "@mui/material";
import { useGlobalProvider } from "../context/GlobalContext";

const Orders = () => {
  const { getOrders } = useOrders();
  const {
    orders: { orders},
  } = useGlobalProvider();
  useEffect(() => {
    getOrders();
    // eslint-disable-next-line
  }, []);
  console.log(orders);
  return <Box>
    {orders.map((el,index) => {
      return <div key={index}>{el.fullname}</div>
    })}
  </Box>;
};
export default Orders;
