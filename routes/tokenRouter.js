const express = require('express');
const tokenRouter = express.Router();
const userController = require('../controllers/users')
const shopController = require('../controllers/shop');
const paymentController = require('../controllers/payment');
const retailerController = require('../controllers/retailer');
const retailerBillController = require('../controllers/retailerBill');
const departmentController = require('../controllers/department');
const categoryController = require('../controllers/category');


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



//                                  Retailer Bill
tokenRouter.route('/addRetailerBill').post(retailerBillController.addRetailerBill);
tokenRouter.route('/getAllRetailerBill').get(retailerBillController.getAllRetailerBill);
tokenRouter.route('/getNameRetailerBill/:name').get(retailerBillController.getNameRetailerBill);



//                                    Department
tokenRouter.route('/addDepartment').post(departmentController.addDepartment);
tokenRouter.route('/getAllDepartment').get(departmentController.getAllDepartment);
tokenRouter.route('/getNameDepartment/:name').get(departmentController.getNameDepartment);


//                                    Category

tokenRouter.route('/addCategory').post(categoryController.addCategory);
tokenRouter.route('/getAllCategory').get(categoryController.getAllCategory);
tokenRouter.route('/getNameCategory/:name').get(categoryController.getNameCategory);

module.exports = tokenRouter;