var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var departmentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model('Department', departmentSchema);
