const catchAsync = require("../utils/catchAsync");

const Bagpack = require("../model/bagpackModel");
const { upload } = require("../utils/multer");
const { uploadImagesToCloud } = require("../utils/cloudinary");

// multer
exports.uploadImages = upload;

// cloudinary
exports.uploadToCloud = uploadImagesToCloud;

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

	if (!bagpack) {
		return next(new AppError("No bagpack found with that id", 404));
	}

	res.status(204).json({
		status: "success",
		data: null,
	});
});
