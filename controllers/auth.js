const Authorization = require('../models/Authorization');
const jwt = require("jsonwebtoken");
const tokenCheckAndGen = require('./generateToken')
const bcrypt = require('bcrypt');

module.exports = {

    register: (req, res) => {
        try {
            let result = {};
            const { username, password, email, shop, status } = req.body;
            console.log("Body Data :- ", req.body)
            const authorization = new Authorization({ username, password, email, shop, status }); // document = instance of a model
            authorization.save((err, authorization) => {
                if (authorization) {
                    console.log("Data ", req.body);
                    const token = tokenCheckAndGen.generateAccessToken(authorization)
                    console.log("token :- ", token)
                    result.status = 200;
                    result.result = authorization;
                    result.token = token;
                    return res.status(200).send(result);
                } else {
                    status = 500;
                    result.status = 500;
                    result.error = err;
                    return res.status(500).send(result);
                }
            });
        }
        catch (err) {
            console.log(err)
        }
    },
    login: async (req, res) => {
        try {
            let result = {};
            const { email, password } = req.body;
            await Authorization.findOne({ email: email }, function (err, authorization) {
                if (authorization) {
                    const passwordMatch = bcrypt.compare(password, authorization.password);
                    if (passwordMatch) {
                        const token = tokenCheckAndGen.generateAccessToken(authorization)
                        result.status = 200;
                        result.authorization = authorization;
                        result.token = token;
                        res.status(200).send(result);
                    } else {
                        result.status = 500;
                        result.err = err
                        res.status(500).send(result);
                    }
                } else {
                    result.status = 500;
                    result.err = err
                    res.status(500).send(result);
                }
            })
        } catch (error) { console.log(error) }
    },
    fetchAllAuth: async (req, res) => {
        try {
            Authorization.find({}).populate('shop').then((authUser) => {
                console.log("Auth User :- ", authUser)
                if (authUser) {
                    res.json(authUser)
                }
            })
        } catch (error) { console.log(error) }
    }
}