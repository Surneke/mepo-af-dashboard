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

  const datas = orders.map((el, index) => {
    return { ...el, id: el._id };
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
    field: "size",
    headerName: "Orderid",
    width: 150,
  },
  {
    field: "order_name",
    headerName: "First name",
    width: 150,
  },
  {
    field: "color",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
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
  },
};
