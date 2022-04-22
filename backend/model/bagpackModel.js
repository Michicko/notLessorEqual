const mongoose = require('mongoose');
const slugify = require("slugify");

const bagpackSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: [true, "A bagpack must have a name"],
	},
	materials: {
		type: String,
		required: [true, "A bagpack must have materials"],
	},
	images: {
		type: [mongoose.Schema.Types.Mixed],
		required: [true, "A bagpack must have images"],
	},
	size: {
		type: String,
		required: [true, "A bagpack must have a size"],
	},
	price: {
		type: Number,
		required: [true, "A bagpack must have a price"],
	},
	featured: {
		type: Boolean,
		default: false,
		required: [true, "A bagpack must have a feature"],
	},
	namePosition: {
		type: String,
		enum: ["top", "bottom"],
		required: [true, "A bagpack must have a name position"],
	},
	slug: {
		type: String,
	},
});

bagpackSchema.pre('save', function (next) {
	this.slug = slugify(this.name);
	next();
});

const Bagpack = mongoose.model('Bagpack', bagpackSchema);
module.exports = Bagpack;