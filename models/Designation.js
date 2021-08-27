var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var designationSchema = new Schema({
    title: {
        type: String,
        unique: true,
        allowNull: false,
    },

});
module.exports = mongoose.model('Designation', designationSchema);
