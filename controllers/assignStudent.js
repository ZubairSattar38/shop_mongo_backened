const mongoose = require("mongoose");
const User = require('../models/User');
module.exports = {
    assignStudents: async(req,res)=>{
        try {


            console.log("req.body ",req.body);
            // let result = {}
            // let status = 200;
            // const course = new Course(req.body); // document = instance of a model

            // course.save((err, course) => {
            //     if (!err) {
            //         result.status = status;
            //         result.result = course;
            //     } else {
            //         status = 500;
            //         result.status = status;
            //         result.error = err;
            //     }
            //     res.status(status).send(result);
            // });
        } catch (error) { console.log(error) }
    }
}