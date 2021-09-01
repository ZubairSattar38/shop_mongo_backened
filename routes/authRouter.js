const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/auth');




authRouter.route('/register').post(authController.register)
authRouter.route('/login').post(authController.login)
authRouter.route('/fetchAllAuth').get(authController.fetchAllAuth)



module.exports = authRouter;