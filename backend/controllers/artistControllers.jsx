const { ArtistModel } = require("../model/artistModel.jsx");

exports.getArtists = async (req, res) => {
	try {
		const artists = await ArtistModel.find();
		res.status(200).json({ artists });
	} catch (error) {
		return res.status(500).json({ msg: error.message });
	}
};

exports.editArtist = async (req, res) => {
	try {
		await ArtistModel.findbyIdAndUpdate(req.params.id);
		res.status(200).json({ msg: `${req.params.id} item updated` });
	} catch (error) {
		return res.status(500).json({ msg: error.message });
	}
};

exports.deleteArtist = async (req, res) => {
	try {
		await ArtistModel.findbyIdAndDelete(req.params.id);
		res.status(200).json({ msg: `${req.params.id} item was deleted` });
	} catch (error) {
		return res.status(500).json({ msg: error.message });
	}
};

exports.createArtist = async (req, res) => {
	try {
		const { title, name, image } = req.body;
		const errs = errorHandler(title, name, image);
		if (Object.keys.length > 0) return res.status(400).json({ msg: errs });
		const newArtist = new ArtistModel(title, name, image);
		await newArtist.save();
		res.status(200).json({ newArtist });
	} catch (error) {
		return res.status(500).json({ msg: error.message });
	}
};

const errorHandler = (title, name, images) => {
	const error = {};
	if (!title) {
		error.title = "title obso";
	}
	if (!name) {
		error.name = "name obso";
	}
	if (!images) {
		error.images = "images obso";
	}
	return error;
};
