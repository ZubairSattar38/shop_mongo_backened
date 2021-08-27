var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var departmentSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model('Department', departmentSchema);
