const Retailer = require('../models/Retailer');
module.exports = {

    addRetailer: (req, res) => {
        try {
            let result = {};
            console.log("req.body ", req.body);
            const {name,contact,address} = req.body;
            const retailer = new Retailer({name,contact,address}); // document = instance of a model
            retailer.save((err, retail) => {
                console.log(retail);
                result.status = 200;
                result.result = retail;
                if (retail) {
                    result.status = 200;
                    result.result = retail;
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
    getAllRetailer : async (req, res)=>{
        let result ={};
        try{
            Retailer.find({}).then(Retailer =>{
                result.status=200;
                result.msg="Successfully Fetched"
                result.Retailer = Retailer;
                console.log("Retailer Data ",Retailer);   
                return res.status(200).json(result); 
            }).catch(error=>{
                console.log(error);
            })
        }catch(error){
            console.log(error);
        }
    },
    getNameRetailer : async (req, res)=>{
        let result ={};
        console.log("Param name ", req.params.name)
        try{
            Retailer.find({name:req.params.name}).then(Retailer =>{
                result.status=200;
                result.msg="Successfully Fetched"
                result.Retailer = Retailer;
                console.log("Retailer Data ",Retailer);   
                return res.status(200).json(result); 
            }).catch(error=>{
                console.log(error);
            })
        }catch(error){
            console.log(error);
        }
    },
}