var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var courseSchema = new Schema({
    courseName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
});
module.exports = mongoose.model('Course', courseSchema);
