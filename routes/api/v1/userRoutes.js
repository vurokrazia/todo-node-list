const express = require('express');
const router = express.Router();
const userController = require('../../../controllers/api/v1/userController');
const validateRequest = require('../../../middlewares/validateRequest');
const { body } = require('express-validator');
router.get("/", userController.index);

router.post("/", [
    body('username')
        .isString()
        .notEmpty(),
    body('email')
        .isString()
        .notEmpty()
        .isEmail(),
    body('password')
        .isString()
        .notEmpty()
        // .isStrongPassword(),
], validateRequest, userController.create);


router.get("/:id", [], validateRequest, userController.find);

module.exports = router;
