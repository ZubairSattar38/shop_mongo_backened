const Course = require('../models/Course');
module.exports = {
     addCourse: async (req, res) => {
        try {
            let result = {}
            let status = 200;
            const course = new Course(req.body); // document = instance of a model

            course.save((err, course) => {
                if (!err) {
                    result.status = status;
                    result.result = course;
                } else {
                    status = 500;
                    result.status = status;
                    result.error = err;
                }
                res.status(status).send(result);
            });
        } catch (error) { console.log(error) }
    },
    getAllCourse:async (req, res)=>{
        try{
            let result = {}
            let status = 200;
            await Course.find({},function(err,courses){
                if (courses) {
                    console.log("users ",courses)
                    result.status = status;
                    result.courses = courses;
                } else {
                    status = status;
                    result.courses = courses;
                }
                res.status(status).send(result);
            })
        }catch(error){
            console.log(error)
        }
    },
    getSearchCourse: async (req, res) => {
        try {
            let result = {}
            let status = 200;
            const {courseName} = req.body
            console.log("Course Name ",courseName)
            await Course.find({courseName:new RegExp(courseName,"i")}, function (err, courses) {
                if (courses) {
                    result.status = status;
                    result.courses = courses;
                } else {
                    status = status;
                    result.courses = courses;
                }
                res.status(status).send(result);
            })
        } catch (error) {
            console.log(error)
        }
    },
}