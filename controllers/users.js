const User = require('../models/User');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

module.exports = {
    addUser: async (req, res) => {
        try {
            let result = {}
            let status = 200;
            const user = new User(req.body); // document = instance of a model

            user.save((err, user) => {
                if (!err) {
                    result.status = status;
                    result.result = user;
                } else {
                    status = 500;
                    result.status = status;
                    result.error = err;
                }
                res.status(status).send(result);
            });
        } catch (error) { console.log(error) }
    },
    checkUserName: async (req, res) => {
        try {
            let result = {}
            let status = 200;
            const { userName } = req.body;
            await User.findOne({ userName: userName }, function (err, user) {
                if (user) {
                    result.status = status;
                    result.userNameExist = true;
                } else {
                    status = status;
                    result.userNameExist = false;
                }
                res.status(status).send(result);
            })
        } catch (error) { console.log(error) }
    },
    getAllTeacher: async (req, res) => {
        try {
            let result = {}
            let status = 200;
            await User.find({ roll: 'teacher' }, function (err, users) {
                if (users) {
                    console.log("users ", users)
                    result.status = status;
                    result.users = users;
                } else {
                    status = status;
                    result.users = users;
                }
                res.status(status).send(result);
            })
        } catch (error) {
            console.log(error)
        }
    },

    getSearchTeacher: async (req, res) => {
        try {
            let result = {}
            let status = 200;
            const {firstName} = req.body
            console.log("First Name ",firstName);
            await User.find({$and:[ {firstName:new RegExp(firstName,"i")},{ roll:'teacher'}]}, function (err, users) {
                if (users) {
                    // console.log("Teacher Data ", users)
                    result.status = status;
                    result.users = users;
                } else {
                    status = status;
                    result.users = users;
                }
                res.status(status).send(result);
            })
        } catch (error) {
            console.log(error)
        }
    },
    getSearchStudent: async (req, res) => {
        try {
            let result = {}
            let status = 200;
            const {firstName} = req.body
            await User.find({$and:[ {firstName:new RegExp(firstName,"i")},{ roll:'student'}]}, function (err, users) {
                if (users) {
                    result.status = status;
                    result.users = users;
                } else {
                    status = status;
                    result.users = users;
                }
                res.status(status).send(result);
            })
        } catch (error) {
            console.log(error)
        }
    },
    getAllStudent: async (req, res) => {
        try {
            let result = {}
            let status = 200;
            await User.find({ roll: 'student' }, function (err, users) {
                if (users) {
                    console.log("users ", users)
                    result.status = status;
                    result.users = users;
                } else {
                    status = status;
                    result.users = users;
                }
                res.status(status).send(result);
            })
        } catch (error) {
            console.log(error)
        }
    }
}