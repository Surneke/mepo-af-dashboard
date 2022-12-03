import "../App.css";
import { Box, Typography } from "@mui/material";
import { BasicModal } from "./modals/orderDetailModal";
import React from "react";

export const CollapsibleTable = (el) => {
	const [visibile, setVisible] = React.useState()

	const style = {
		container: {
			height: "50px",
			display: "flex",
			maxWidth: "1500px",
			minWidth: "1200px",
			justifyContent: "space-between",
			backgroundColor: "#fff"
		}
	}
	// console.log(el)
	return (
		<Box style={style.container}>
			<Typography>1</Typography>
			<Typography>{el._id}</Typography>
			<Typography>{el.createdAt}</Typography>
			<Typography>{el.createdAt}</Typography>
			<Typography>{el.color}</Typography>
			<Typography>{el.size}</Typography>
			<Typography>{el.orderStatus}</Typography>
			<Typography>{el.address}</Typography>
			<Box>
				<BasicModal {...el} />
			</Box>
		</Box>
	)
};
