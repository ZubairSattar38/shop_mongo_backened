const express = require('express');
const tokenRouter = express.Router();
const userController = require('../controllers/users')
const shopController =  require('../controllers/shop');
const paymentController =  require('../controllers/payment');
const retailerController =  require('../controllers/retailer');
// const courseController = require('../controllers/course')
// const classController = require('../controllers/classes')

tokenRouter.route('/addUser').post(userController.addUser)
tokenRouter.route('/getAllUsers').get(userController.getAllUsers);
tokenRouter.route('/getDesUser/:id').get(userController.getDesUser);

//                              Shop
tokenRouter.route('/addShop').post(shopController.addShop)


//                                 Payment

tokenRouter.route('/addPayment').post(paymentController.addPayment);
tokenRouter.route('/getAllPayment').get(paymentController.getAllPayment);


//                                  Retailer
tokenRouter.route('/addRetailer').post(retailerController.addRetailer);
tokenRouter.route('/getAllRetailer').get(retailerController.getAllRetailer);
tokenRouter.route('/getNameRetailer/:name').get(retailerController.getNameRetailer);



module.exports = tokenRouter;