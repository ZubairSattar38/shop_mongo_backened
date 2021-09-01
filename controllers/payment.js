const Payment = require('../models/Payment');
module.exports = {
    addPayment: (req, res) => {
        try {
            let result = {};
            console.log("req.body ", req.body);
            const { bill_month_name, arrears, fine, issue_date, last_date, payment_date, amount_pay, remainings,image_url,status } = req.body;
            const Payment = new Payment({bill_month_name, arrears, fine, issue_date, last_date, payment_date, amount_pay, remainings,image_url,status}); // document = instance of a model
            Payment.save((err, Payment) => {
                console.log(Payment);
                result.status = 200;
                result.result = Payment;
                if (Payment) {
                    result.status = 200;
                    result.result = Payment;
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
    getAllPayment : async (req, res)=>{
        let result ={};
        try{
            console.log("Checking")
            Payment.find({}).then(Payment =>{
                result.status=200;
                result.msg="Successfully Fetched"
                result.Payment = Payment;
                console.log("Payment Data ",Payment);   
                return res.status(200).json(result); 
            }).catch(error=>{
                console.log(error);
            })
        }catch(error){
            console.log(error);
        }
    },

}