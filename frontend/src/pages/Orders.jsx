import React, { useEffect } from "react";
import { useOrders } from "../api/useOrders";
import { Box, Select, Typography } from "@mui/material";
import { useGlobalProvider } from "../context/GlobalContext";
import { CollapsibleTable } from "../components/List";

const Orders = () => {
  const list = ["No", "Order ID", "Purchased on", "Order name", "Color", "Size", "Status", "Ship to", "Action"]
  const { getOrders } = useOrders();
  const {
    orders: { orders },
  } = useGlobalProvider();
  
  useEffect(() => {
    getOrders();
    // eslint-disable-next-line
  }, []);

  return (
    <Box style={style.box}>
      <Box style={style.container}>
        <Box display="flex" justifyContent="space-between">
          <Typography>Order listing</Typography>
          <Select></Select>
        </Box>
        <Box display="flex" justifyContent="space-between">
          {list.map((el, index) => <Box style={style.head} key={index}><Typography  >{el}</Typography></Box>)}
        </Box>
        <Box>
          {orders?.map((el, index) => (<CollapsibleTable key={index} {...el} />))}
        </Box>
      </Box>
    </Box>
  )
};
export default Orders;

const style = {
  box: {
    backgroundColor: "#f2f2f9",
    height: "100vh",
    width: "100vw"
  },
  container: {
    maxWidth: "1500px",
    minWidth: "1200px",
    marginLeft: "260px",
    marginTop: "60px",
    backgroundColor: "#ffff",
  },
  head: {
    maxWidth: "200px",
    fontWeight: 600,
  }
}