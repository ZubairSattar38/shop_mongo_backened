const Shop = require('../models/Shop');
module.exports = {
    addShop: (req, res) => {
        try {
            let result = {};
            console.log("req.body ", req.body);
            const { name, posfix, contact, phone, formatted_address, town, city, status } = req.body;
            const shop = new Shop({ name, posfix, contact, phone, formatted_address, town, city, status }); // document = instance of a model
            shop.save((err, shop) => {
                console.log(shop);
                result.status = 200;
                result.result = shop;
                if (shop) {
                    result.status = 200;
                    result.result = shop;
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
    getAllShop : async (req, res)=>{
        let result ={};
        try{
            console.log("Checking")
            Shop.find({}).then(shop =>{
                result.status=200;
                result.msg="Successfully Fetched"
                result.shop = shop;
                console.log("shop Data ",shop);   
                return res.status(200).json(result); 
            }).catch(error=>{
                console.log(error);
            })
        }catch(error){
            console.log(error);
        }
    },

}