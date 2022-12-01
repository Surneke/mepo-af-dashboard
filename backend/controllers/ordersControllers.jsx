const {  OrderModel } = require("../model/ordersModel.jsx");

exports.orderController = {
	getOrders: async (req, res) => {
		try {
			const allOrders = await OrderModel.find().populate("orderItems");
			res.status(200).json({ allOrders });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	getOrder: (req, res) => {
		console.log(req.params.id);
		res.status(200).json({
			success: true,
			data: `get ${req.params.id} order.`,
		});
	},

	updateOrder: async (req, res) => {
		try {
			const { orderStatus } = req.body;
			await OrderModel.findByIdAndUpdate(req.params.id, { orderStatus });
			res.status(200).json({ msg: `${req.params.id} item updated` });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	deleteOrder: async (req, res) => {
		try {
			await OrderModel.findByIdAndDelete(req.params.id);
			res.status(200).json({ msg: `${req.params.id} item was deleted` });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	}
}

{
	/* <input ref="imageRef" type="file" multiple accept="image/*" name="images" /> */
}

//dorvoljin onclick imgaref.current.click()
//  URL.createObjectURL(item)
