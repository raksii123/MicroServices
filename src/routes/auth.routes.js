const express = require('express');
const validators = require('../middleware/validator.middelware');
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');


const router = express.Router();



router.post("/register", validators.registerUserValidations, authController.registerUser);
router.post("/login", validators.loginUserValidations , authController.loginUser);



//Get/api/aut/me
router.get("/me", authMiddleware.authMiddlewarer, authController.getCurrentUser);
router.get("/logout", authController.logoutUser);

module.exports = router;