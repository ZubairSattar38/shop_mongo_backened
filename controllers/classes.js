const { populate } = require('../models/Classes');
const Class = require('../models/Classes');
module.exports = {
     addClasses: async (req, res) => {
        try {
            let result = {}
            let status = 200;
            console.log("request ",req.body)
            const classes = new Class(req.body); // document = instance of a model

            classes.save((err, classes) => {
                if (!err) {
                    result.status = status;
                    result.classes = classes;
                } else {
                    status = 500;
                    result.status = status;
                    result.error = err;
                }
                res.status(status).send(result);
            });
        } catch (error) { console.log(error) }
    },
    getAllClasses:async (req, res)=>{
        try{
            let result = {}
            let status = 200;
            await  Class.find({}).populate("courseId","courseName").populate("teacherId","firstName lastName")
                .then(function(classes) {
                    console.log("classes ",classes)
                    result.status = status;
                    result.classes = classes;
                    res.status(status).send(result);
                  })
        }catch(error){
            console.log(error)
        }
    },
    getSearchClasses: async (req, res) => {
        try {
            let result = {}
            let status = 200;
            const {className} = req.body
            console.log("Course Name ",className)
            await Class.find({className:new RegExp(className,"i")}, function (err, classes) {
                if (classes) {
                    result.status = status;
                    result.classes = classes;
                } else {
                    status = status;
                    result.classes = classes;
                }
                res.status(status).send(result);
            })
        } catch (error) {
            console.log(error)
        }
    },
}