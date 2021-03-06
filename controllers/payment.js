const Payment = require('../models/Payment');
module.exports = {
    addPayment: (req, res) => {
        try {
            let result = {};
            console.log("req.body ", req.body);
            const { bill_month_name, arrears, fine, issue_date, last_date, payment_date, amount_pay, remainings,image_url,status } = req.body;
            const payment = new Payment({bill_month_name, arrears, fine, issue_date, last_date, payment_date, amount_pay, remainings,image_url,status}); // document = instance of a model
            payment.save((err, pay) => {
                console.log(pay);
                result.status = 200;
                result.result = pay;
                if (pay) {
                    result.status = 200;
                    result.result = pay;
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
    getMonthPayments : async (req, res)=>{
        let result ={};
        console.log("Param name ", req.params.month)
        try{
            Payment.find({bill_month_name:req.params.month}).then(Payment =>{
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