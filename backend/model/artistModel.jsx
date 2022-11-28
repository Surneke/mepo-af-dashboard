const { Schema, model } = require("mongoose");

const ArtistShema = new Schema(
	{
		title: { type: String, required: true, trim: true },
		name: { type: String, required: true, trim: true },
		imagr: { type: Array, default: [] },
	},
	{ timestamps: true }
);

exports.artistModel = model("Artist", ArtistShema);
