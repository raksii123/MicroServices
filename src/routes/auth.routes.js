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

router.get('/users/me/adresses', authMiddleware.authMiddlewarer, authController.getUserAdresses)
router.post('/users/me/adresses', validators.addUserAddressValidations ,authMiddleware.authMiddlewarer, authController.addUserAdresses)
router.delete('/users/me/adresses/:addressId', authMiddleware.authMiddlewarer, authController.deleteUserAddress)




module.exports = router;