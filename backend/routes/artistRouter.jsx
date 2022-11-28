const express = require("express");
const artistsRouter = express.Router();
const {
	deleteArtist,
	editArtist,
	getArtists,
} = require("../controllers/artistControllers");

artistsRouter.route("/artists").get(getArtists);
artistsRouter.route("/artists/:id").patch(editArtist).delete(deleteArtist);
