const User = require('../models/User');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

module.exports = {
    addUser: (req, res) => {
        try {
            let result = {};
            let status = 200;
            const { username,name, designation, image_url, nic, contact } = req.body;
            const user = new User({ username,name, designation, image_url, nic, contact }); // document = instance of a model
            console.log("req ", user)
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
        }
        catch (err) {
            console.log(err)
        }
    },
    getAllUsers : async (req, res)=>{
        let result ={};
        try{
            console.log("Checking")
            User.find({}).then(users =>{
                result.status=200;
                result.msg="Successfully Fetched"
                result.users = users;
                console.log("User Data ",users);   
                return res.status(200).json(result); 
            }).catch(error=>{
                console.log(error);
            })
        }catch(error){
            console.log(error);
        }
    },
    getDesUser: async (req,res)=>{
        try{
            console.log("Check :- ",req.params.id);
            User.find({desId : req.params.id}).populate(Designation,{des_id}).then(users =>{
                console.log("users :- ",users);
                res.json(users);
            })
        }catch(error){
            console.log(error);
        }
    }

}