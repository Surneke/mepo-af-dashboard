import Logo from "../images/black.png";
import { Box, Button, TextField, Typography } from "@mui/material";
import {  useAuthProvider } from "../providers/AuthProvider";
import { useNavigate } from "react-router";

export const Login = (props) => {
	const { setCheck } = useAuthProvider();
	const navigate = useNavigate();
	const style = {
		textField: {
			marginTop: "10px",
		},
	};
	const handleClick = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		if (
			data.get("email") === "surnee399@gmail.com" &&
			data.get("password") === "1234"
		) {
			setCheck(true);
			navigate("/orders");
		} else {
			alert("code buruu");
		}
	};

	return (
		<Box display="flex" width="100%" height="100vh">
			<Box
				sx={{
					backgroundColor: "#f2f2f7",
					height: "100%",
					width: "35%",
				}}
			/>
			<Box
				display="flex"
				height="100%"
				justifyContent="center"
				alignItems="center"
				width="50%"
			>
				<Box display="flex" flexDirection="column" height="50%">
					<Box
						height="80px"
						width="270px"
						component="img"
						src={Logo}
					/>
					<Typography variant="h3" mt="20px">
						Welcome back
					</Typography>
					<Typography
						variant="h6"
						mt="10px"
						sx={{ color: "#b6b9ca" }}
					>
						Enter your credentials to access your account.
					</Typography>
					<Box
						display="flex"
						flexDirection="column"
						component="form"
						onSubmit={handleClick}
						noValidate
					>
						<TextField
							label="Enter your email"
							variant="outlined"
							required
							fullWidth
							id="email"
							name="email"
							autoComplete="email"
							autoFocus
							sx={style.textField}
						/>
						<TextField
							label="Enter your password"
							variant="outlined"
							required
							fullWidth
							name="password"
							type="password"
							id="password"
							autoComplete="current-password"
							sx={style.textField}
						/>
						<Button
							type="submit"
							variant="contained"
							sx={{ mt: "15px", padding: "10px 10px" }}
						>
							Login
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};