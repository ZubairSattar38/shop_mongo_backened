const Subscription = require('../models/Subscription');
module.exports = {
    addCategory: (req, res) => {
        try {
            let result = {};
            console.log("req.body ", req.body);
            const {name,department} = req.body;
            const subscription = new Subscription({name,department}); // document = instance of a model
            subscription.save((err, sub) => {
                result.status = 200;
                result.result = sub;
                if (sub) {
                    result.status = 200;
                    result.result = sub;
                } else {
                    result.status = 500;
                    result.error = err;
                }
                res.status(200).send(result);
            });
        }
        catch (err) {
            console.log(err)
        }
    },
    getAllCategory : async (req, res)=>{
        let result ={};
        try{
            Category.find({}).populate('department').then(cat =>{
                console.log("Category :- ",cat)
                result.status=200;
                result.msg="Successfully Fetched"
                result.cat = cat;
                return res.status(200).json(result); 
            }).catch(error=>{
                console.log(error);
            })
        }catch(error){
            console.log(error);
        }
    },
    getNameCategory : async (req, res)=>{
        let result ={};
        try{
            Category.find({name:req.params.name}).populate('department').then(cat =>{
                result.status=200;
                result.msg="Successfully Fetched"
                result.Category = cat;
                return res.status(200).json(result); 
            }).catch(error=>{
                console.log(error);
            })
        }catch(error){
            console.log(error);
        }
    },
}