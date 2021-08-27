var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var retailerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    contact: {
        type: Schema.Types.ObjectId,
    },
    address: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true,
        unique: true
    },
});
module.exports = mongoose.model('Retailer', retailerSchema);
