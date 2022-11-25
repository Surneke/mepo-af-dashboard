const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const { connect, connection } = require("mongoose");
const ordersRoutes = require("./routes/ordersRouter.jsx");
const productsRouter = require("./routes/productsRouter.jsx");

//appiin tohirgoog shalgah process.env
dotenv.config({ path: "./config/.env" });

//router
const app = express();
app.use(bodyParser())
app.use("/api/orders", ordersRoutes);
app.use("/api", productsRouter);

//mongodb holboh
connection.once("open", () => {
	console.log("mongodb database connected");
});
connection.on("disconnected", () => {
	console.log("mongodb database disconnected...");
});
connection.on("error", (e) => {
	console.log(`error ${e}`);
});
process.on("SIGINT", () => {
	connection.close(() => {
		console.log("database terminated");
		process.exit(0);
	});
});

connect(process.env.MONGODB_URL, {
	UseNewUrlParser: true,
	UseUnifiedTopology: true,
}).then(() => {
	app.listen(
		process.env.PORT,
		console.log(`Express server ${process.env.PORT}`)
	);
});

