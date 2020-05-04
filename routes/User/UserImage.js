const express = require('express');

const router = express.Router();
const UserImageController = require('../../controllers/User/UserImage');

router.post('/UserImage', UserImageController.postUserImage);

router.get('/UserImage', UserImageController.getUserImage);

module.exports = router;