const catchAsync = require("../utils/catchAsync");
const Bagpack = require("../model/bagpackModel");
const AppError = require("../utils/appError");

// get public ids for bagpack images to delete
exports.getPublicIds = catchAsync(async (req, res, next) => {
	const { id } = req.params;
	const bagpack = await Bagpack.findById(id);

	if (!bagpack) {
		return next(new AppError("No bagpack found with that id", 404));
	}

	const public_ids = bagpack.images.map((img) => img.cloudinary_id);
	req.public_ids = public_ids;
	next();
});

exports.getBagpacks = catchAsync(async (req, res, next) => {
	const bagpacks = await Bagpack.find({});

	res.status(200).json({
		result: bagpacks.length,
		status: "success",
		data: {
			bagpacks,
		},
	});
});

exports.getBagpack = catchAsync(async (req, res, next) => {
	const { id } = req.params;
	const bagpack = await Bagpack.findById(id);

	if (!bagpack) {
		return next(new AppError("No bagpack found with that id", 404));
	}

	res.status(200).json({
		status: "success",
		data: {
			bagpack,
		},
	});
});

exports.createBagpack = catchAsync(async (req, res, next) => {
	const bagpack = await Bagpack.create(req.body);
	res.status(201).json({
		status: "success",
		data: {
			bagpack,
		},
	});
});

exports.updateBagpack = catchAsync(async (req, res, next) => {
	const { id } = req.params;
	const bagpack = await Bagpack.findByIdAndUpdate(id, req.body, {
		new: true,
		runValidators: true,
	});

	if (!bagpack) {
		return next(new AppError("No bagpack found with that id", 404));
	}

	res.status(200).json({
		status: "success",
		data: {
			bagpack,
		},
	});
});   



exports.deleteBagpack = catchAsync(async (req, res, next) => {
	const { id } = req.params;
	const bagpack = await Bagpack.findByIdAndDelete(id);

	res.status(204).json({
		status: "success",
		data: null,
	});
});
