const { ProductModel } = require("../model/ProductModel.jsx");

exports.getProducts = async (req, res) => {
  try {
    const { gender } = req.query;
    let genderQ = gender || "All";
    genderQ === "All" ? (genderQ = ["Men", "Women"]) : genderQ === "Men" ? (genderQ = ["Men"]) : (genderQ = ["Women"]);
    const products = await ProductModel.find()
      .where("gender")
      .in([...genderQ]);
    res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
const errorHandler = (title, price, description) => {
  const error = {};
  if (!title) {
    error.title = "title obso";
  }
  if (!price) {
    error.price = "price obso";
  }
  if (!description) {
    error.description = "description obso";
  }
  return error;
};

exports.addProducts = async (req, res) => {
  try {
    const { title, price, description, images, gender, unique, special, quantity } = req.body;
    const errs = errorHandler(title, price, description);
    if (Object.keys(errs).length > 0) return res.status(400).json({ msg: errs });
    const newProduct = new ProductModel({ title, price, description, images, gender, unique, special, quantity });
    await newProduct.save();
    res.status(200).json({ newProduct });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { title, price, description, images, gender, unique, special, quantity } = req.body;
    const errs = errorHandler(title, price, description);
    if (Object.keys(errs).length > 0) return res.status(400).json({ msg: errs });
    const updateProduct = await ProductModel.findByIdAndUpdate(req.params.id,{ title, price, description, images, gender, unique, special, quantity });
    res.status(200).json({updateProduct})
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
    try {
        await ProductModel.findByIdAndDelete(req.params.id)
        res.status(200).json({msg: `${req.params.id} item deleted`})
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
};
