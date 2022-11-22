import { Box,Typography } from "@mui/material";
import data from "../test-data.json";
import "../App.css";

export const CollapsibleTable = (props) => {
	const options = [
		{ value: "lastweek", label: "lastweek" },
		{ value: "january", label: "january" },
		{ value: "february", label: "february" },
		{ value: "march", label: "march" },
		{ value: "april", label: "april" },
		{ value: "may", label: "may" },
		{ value: "june", label: "june" },
		{ value: "july", label: "july" },
		{ value: "august", label: "august" },
		{ value: "september", label: "september" },
		{ value: "october", label: "october" },
		{ value: "november", label: "november" },
		{ value: "year", label: "Year" },
	];
	const handleChange = () => {
		return <div>eji</div>;
	};
	return (
		<Box>
			<Box display="flex" justifyContent="space-between" >
                     <Typography>Order list</Typography> 
				<select options={options} onChange={handleChange} ></select>
			</Box>
			<Box className="table-container">
				<table>
					{/* <thead>
						<th>NO</th>
						<th className="table-row-all table-row">Order name</th>
						<th className="table-row-all">Order ID</th>
						<th className="table-row-all ">Date</th>
						<th className="table-row-all">Size</th>
						<th className="table-row-all ">Color</th>
						<th>QTY</th>
						<th className="table-row-all">Customer name</th>
						<th className="table-row-all">Phone number</th>
						<th className="table-row-all table-row">Ship to</th>
						<th className="table-row-all">Paybill</th>
						<th className="table-row-all">Status</th>
					</thead> */}
					{/* <tbody>
						{data.map((el, index) => {
							return (
								<tr key={index}>
									<td className="table-column">
										{index + 1}
									</td>
									<td className="table-column">{el.name}</td>
									<td className="table-column">{el.id}</td>
									<td className="table-column">{el.date}</td>
									<td className="table-column">{el.size}</td>
									<td className="table-column">{el.color}</td>
									<td className="table-column">{el.qty}</td>
									<td className="table-column">
										{el.customer}
									</td>
									<td className="table-column">{el.phone}</td>
									<td className="table-column">
										{el.shipto}
									</td>
									<td className="table-column">
										{el.paybill}
									</td>
									<td className="table-column">
										{el.status}
									</td>
								</tr>
							);
						})}
					</tbody> */}
				</table>
			</Box>
		</Box>
	);
};
