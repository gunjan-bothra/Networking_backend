const express = require('express');

const router = express.Router();
const registrationController = require('../../controllers/Login/registration');
const signinController = require('../../controllers/Login/signin');
const logoutController = require('../../controllers/Login/logout');

router.post('/registration', registrationController.registration);

router.post('/signin', signinController.postSignin);

router.post('/logout', logoutController.postLogout);

module.exports = router;
