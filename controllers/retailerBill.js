const RetailerBill = require('../models/RetailerBill');
module.exports = {
    addRetailerBill: (req, res) => {
        try {
            let result = {};
            console.log("req.body Data ", req.body);
            const {name,bill_no,retailer,issue_date,expire_date,total_quantity,total_amount,status} = req.body;
            const retailerBill = new RetailerBill({name,bill_no,retailer,issue_date,expire_date,total_quantity,total_amount,status}); // document = instance of a model
            retailerBill.save((err, retail) => {
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
            console.log(err);
        }
    },
    getAllRetailerBill : async (req, res)=>{
        let result ={};
        try{
            RetailerBill.find({}).populate('retailer').then(Retailer =>{
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
    getNameRetailerBill : async (req, res)=>{
        let result ={};
        console.log("Param name ", req.params.name)
        try{
            RetailerBill.find({name:req.params.name}).populate('retailer').then(Retailer =>{
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