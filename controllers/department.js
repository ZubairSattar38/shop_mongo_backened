const Department = require('../models/Department');
module.exports = {
    addDepartment: (req, res) => {
        try {
            let result = {};
            console.log("req.body ", req.body);
            const {name} = req.body;
            const department = new Department({name}); // document = instance of a model
            department.save((err, dep) => {
                console.log(dep);
                result.status = 200;
                result.result = dep;
                if (dep) {
                    result.status = 200;
                    result.result = dep;
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
    getAllDepartment : async (req, res)=>{
        let result ={};
        try{
            Department.find({}).then(dep =>{
                result.status=200;
                result.msg="Successfully Fetched"
                result.dep = dep;
                return res.status(200).json(result); 
            }).catch(error=>{
                console.log(error);
            })
        }catch(error){
            console.log(error);
        }
    },
    getNameDepartment : async (req, res)=>{
        let result ={};
        try{
            Department.find({name:req.params.name}).then(dep =>{
                result.status=200;
                result.msg="Successfully Fetched"
                result.department = dep;
                return res.status(200).json(result); 
            }).catch(error=>{
                console.log(error);
            })
        }catch(error){
            console.log(error);
        }
    },
}