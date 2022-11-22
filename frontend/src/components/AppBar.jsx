import * as React from "react";
import Logo from "../images/black.png";
import {
	AppBar,
	Box,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CollapsibleTable } from "./List";
import { LogoutModal } from "./logoutModal";

export const ResponsiveDrawer = (props) => {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Divider />
			<List>
				{list.map((el, index) => (
					<Link
						to={el.path}
						style={{
							textDecoration: "none",
							display: "flex",
							color: "#000",
						}}
						key={index}
					>
						<ListItem key={index} disablePadding>
							<ListItemButton>
								<ListItemIcon>{el.icon}</ListItemIcon>
								<ListItemText primary={el.name} />
							</ListItemButton>
						</ListItem>
					</Link>
				))}
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<i className="fa-solid fa-arrow-right-from-bracket"></i>
						</ListItemIcon>
						<ListItemText primary="Logout" />
						<LogoutModal  /> 
					</ListItemButton>
				</ListItem>
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					></IconButton>
					<Typography variant="h6" noWrap component="div">
						Orders
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					open
				>
					<img alt="logo" src={Logo} />
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				<CollapsibleTable />
			</Box>
		</Box>
	);
};

const list = [
	{
		name: "Orders",
		path: "/orders",
		icon: <i className="fa-solid fa-clipboard"></i>,
	},
	{
		name: "Users",
		path: "/users",
		icon: <i className="fa-solid fa-users"></i>,
	},
	{
		name: "Producs",
		path: "/products",
		icon: <i className="fa-solid fa-shirt"></i>,
	},
	{
		name: "Collections",
		path: "/collections",
		icon: <i className="fa-solid fa-list"></i>,
	},
];

const drawerWidth = 240;
