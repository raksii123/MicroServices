const express = require('express');
const validators = require('../middleware/validator.middelware');
const authController = require('../controllers/auth.controller');



const router = express.Router();



router.post("/register", validators.registerUserValidations, authController.registerUser)

module.exports = router;