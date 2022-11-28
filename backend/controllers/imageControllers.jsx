const { UserShema } = require('../model/usersModel.jsx')

exports.uploadImg = (req, res) => {
	console.log(req.params.id);
	res.status(200).json({
		success: true,
		data: `get ${req.params.id} order.`,
	});
};

exports.updateImg = (req, res) => {
	console.log(req.params.id);
	res.status(200).json({
		success: true,
		data: `get ${req.params.id} order.`,
		
	});
};

exports.deleteImg = (req, res) => {
	console.log(req.params.id);
	res.status(200).json({
		success: true,
		data: `get ${req.params.id} order.`,
	});
};

