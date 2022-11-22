exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: "get all products.",
    })
};

exports.getProduct = (req, res, next) => {
    console.log(req.params.id)
    res.status(200).json({
        success: true,
        data: `get ${req.params.id} product.`,
    })
};

exports.addProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: "create new product.",
    })
};

exports.updateProduct = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: `update ${req.params.id} product.`,
    })
};

exports.deleteProduct = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: `deleted ${req.params.id} product.`,
    })
};