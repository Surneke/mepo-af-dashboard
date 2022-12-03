import { useState, useEffect } from "react";
import { useOrders } from "../../api/useOrders";
import { Box, InputLabel, MenuItem, FormControl, Select, Typography } from "@mui/material";

export const StatusSelect = ({ element }) => {
    const [status, setStatus] = useState("");
    const { changeOrderStatus } = useOrders();
    

    useEffect(() => {
        setStatus(element.orderStatus);
    }, [element.orderStatus]);

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    useEffect(() => { changeOrderStatus(status, element._id) }, [status])

    return (

        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select value={status} label="status" onChange={handleChange}>
                    <MenuItem value={"ORDERED"}><Typography variant="body2">ORDERED</Typography></MenuItem>
                    <MenuItem value={"COMPLETED"}><Typography variant="body2">COMPLETED</Typography></MenuItem>
                    <MenuItem value={"DELIVERING"}><Typography variant="body2">DELIVERING</Typography></MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};