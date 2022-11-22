exports.getOrders = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: "get all oreders.",
    })
};

exports.getOrder = (req, res, next) => {
    console.log(req.params.id)
    res.status(200).json({
        success: true,
        data: `get ${req.params.id} order.`,
    })
};

exports.createOrder = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: "create new order.",
    })
};

exports.updateOrder = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: `update ${req.params.id} order.`,
    })
};

exports.deleteOrder = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: `deleted ${req.params.id} order.`,
    })
};