const express = require('express');
const router = express.Router();
const userController = require('../../../controllers/api/v1/userController');
const validateRequest = require('../../../middlewares/validateRequest');
const { body } = require('express-validator');
const { verificarToken } = require('../../../middlewares/verifyJwtToken');

router.get('/', verificarToken, userController.index);

router.post('/', [
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

router.get('/:id', [], verificarToken, userController.find);

router.post('/login', [], validateRequest, userController.login);

module.exports = router;
