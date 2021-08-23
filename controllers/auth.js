const User = require('../models/User');
const jwt = require("jsonwebtoken");
const tokenCheckAndGen = require('./generateToken')
const bcrypt = require('bcrypt');

module.exports = {
    register: (req, res) => {
        try{
        let result = {};
        let status = 200;
        const { firstName, lastName, userName, roll, email, password } = req.body;
        const user = new User({ firstName, lastName, userName, roll, email, password }); // document = instance of a model
        console.log("req ",user)
        user.save((err, user) => {
            if (!err) {
                const token = tokenCheckAndGen.generateAccessToken(user)
                result.status = status;
                result.result = user;
                result.token = token;
            } else {
                status = 500;
                result.status = status;
                result.error = err;
            }
            res.status(status).send(result);
        });
    }
    catch(err){
        console.log(err)
    }
    },
    login: async (req, res) => {
        try {
            let result = {};
            let status = 200;
            const { email, password } = req.body;
            await User.findOne({ email: email }, function (err, user) {
                if (user) {
                    const passwordMatch = bcrypt.compare(password, user.password);
                    if (passwordMatch) {
                        //login
                        const token = tokenCheckAndGen.generateAccessToken(user)
                        result.status = status;
                        result.user = user;
                        result.token = token;
                        res.status(status).send(result);
                    } else {
                        result.status = 500;
                        result.err = err
                        res.status(status).send(result);
                    }
                } else {
                    result.status = 500;
                    result.err = err
                    res.status(status).send(result);
                }
            })
        } catch (error) { console.log(error) }
    }
}