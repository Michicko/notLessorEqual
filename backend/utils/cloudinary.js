const cloudinary = require("cloudinary").v2;
require("dotenv").config({ path: "./config.env" });
const slugify = require("slugify");
const catchAsync = require("../utils/catchAsync");
const fs = require("fs");


cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	// secure: true,
});

const cloudinaryUploader = async (path, identifier) =>
	await cloudinary.uploader.upload(path, {
		public_id: `notlessorequal/images/${slugify(identifier)}`,
  });

  // remove saved image from disk
  const removeTempImg = (path) => {
		return fs.unlink(path, () => {});
	};

	// create data object
  const createObjData = (url, id) => {
		return {
			url,
			cloudinary_id: id,
		};
};
  

exports.uploadImagesToCloud = catchAsync(async (req, res, next) => {
  let images = [];
	const imagesPath = req.files.images.map((img) => img.path);

	// upload images to cloudindary
	const result = imagesPath.map(async (path, i) => {
		const resDat = await cloudinaryUploader(path, `${req.body.name}-${i + 1}`);
		removeTempImg(path);
		return resDat;
	});

	const data = await Promise.all(result);

	// push res url and public id to arr
	data.forEach((item) => {
		const datObj = createObjData(item.secure_url, item.public_id);
		images.push(datObj);
	});

	// asign images to req.body.images
	req.body.images = images;

	next();
})