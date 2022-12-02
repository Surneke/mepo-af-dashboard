import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useOrders } from "../api/useOrders";

export const SelectO = ({ element }) => {
  const [status, setStatus] = useState("");
  const { changeOrderStatus } = useOrders();
  useEffect(() => {
    setStatus(element.orderStatus);
  }, [element.orderStatus]);
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  useEffect(()=>{changeOrderStatus(status, element._id)},[status])
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select value={status} label="status" onChange={handleChange}>
          <MenuItem value={"ORDERED"}>ORDERED</MenuItem>
          <MenuItem value={"COMPLETED"}>COMPLETED</MenuItem>
          <MenuItem value={"DELIVERING"}>DELIVERING</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
