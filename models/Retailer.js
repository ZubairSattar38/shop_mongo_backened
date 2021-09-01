var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var retailerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model('Retailer', retailerSchema);
