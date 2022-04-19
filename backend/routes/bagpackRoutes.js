const express = require("express");
const {
	getBagpacks,
	createBagpack,
	getBagpack,
	updateBagpack,
	deleteBagpack,
	getPublicIds,
} = require("../controller/bagpackController");
const {
	uploadImagesToCloud,
	deleteImagesFromCloudApi,
	deleteImagesFromCloud,
} = require("../utils/cloudinary");
const { uploadImages } = require("../utils/multer");

const router = express.Router();

router
	.route("/")
	.get(getBagpacks)
	.post(uploadImages, uploadImagesToCloud, createBagpack);

router.route("/:id").get(getBagpack).patch(updateBagpack).delete(
	getPublicIds,
	// deleteImagesFromCloudApi,
	deleteImagesFromCloud,
	deleteBagpack
);

module.exports = router;
