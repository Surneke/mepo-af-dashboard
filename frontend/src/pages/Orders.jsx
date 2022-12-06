import React, { useEffect } from "react";
import { useOrders } from "../api/useOrders";
import { Box, Button, IconButton, Select, Typography } from "@mui/material";
import { useGlobalProvider } from "../context/GlobalContext";
import { DataGrid } from "@mui/x-data-grid";
import { BasicModal } from "../components/modals/orderDetailModal";
import { StatusSelect } from "../components/selects/orderStatusSelect";

const Orders = () => {
  // const list = ["No", "Order ID", "Purchased on", "Order name", "Color", "Size", "Status", "Ship to", "Action"];
  const { getOrders } = useOrders();
  const {
    orders: { orders },
  } = useGlobalProvider();

  useEffect(() => {
    getOrders();
    // eslint-disable-next-line
  }, []);
console.log(orders);
  const datas = orders.map((el, index) => {
    return { ...el, id: el._id, index: index +1, createdAt : Date(el.createdAt).slice(0,15),orderName: el.orderItem.title , address: el.user.address.citySoum};
  });
  return (
    <Box style={style.box}>
      <Box style={style.container}>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid rows={datas} columns={columns} pageSize={5} rowsPerPageOptions={[5]} disableSelectionOnClick experimentalFeatures={{ newEditingApi: true }} rowHeight={80}/>
        </Box>
      </Box>
    </Box>
  );
};

const columns = [
  {
    field: "index" ,
    headerName: "No",
    width: 50,
  },
  {
    field: "id",
    headerName: "Order ID",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Purchased on",
    width: 150,
  },
  {
    field: "orderName",
    headerName: "Order name",
    type: "number",
    width: 150,
  },
  {
    field: "size",
    headerName: "Size",
    type: "number",
    width: 80,
  },
  {
    field: "address",
    headerName: "Ship to",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => <StatusSelect element={params.row} />,
  },
  {
    field: "action",
    headerName: "Action",
    width: 110,
    renderCell: (params) => <BasicModal el={params} />,
  },
];

export default Orders;

const style = {
  box: {
    backgroundColor: "#f2f2f9",
    height: "100vh",
    width: "100vw",
    paddingTop:"60px"
   
  },
  container: {
    marginLeft: "260px",
    backgroundColor: "#ffff",
  },
  head: {
    maxWidth: "200px",
    fontWeight: 600,
  },
};
