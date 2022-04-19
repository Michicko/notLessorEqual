const express = require('express');
const { getBagpacks, createBagpack, getBagpack, updateBagpack, deleteBagpack, uploadImages } = require('../controller/bagpackController');
const { uploadImagesToCloud } = require('../utils/cloudinary');

const router = express.Router();

router
  .route('/')
  .get(getBagpacks)
  .post(uploadImages,
    uploadImagesToCloud,
    createBagpack)

router
  .route('/:id')
  .get(getBagpack)
  .patch(updateBagpack)
  .delete(deleteBagpack)

module.exports = router;