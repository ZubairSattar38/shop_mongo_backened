var mongoose = require('mongoose');
const environment = process.env.NODE_ENV;

var Schema = mongoose.Schema;

var shopSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    posfix: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    formatted_address: {
        type: String,
    },
    town: {
        type: String,
    },
    city: {
        type: String,
    },
    register_date: { type: Date, default: Date.now },

    status:{
        type:Boolean,
        default:false
    }
});
module.exports = mongoose.model('Shop', shopSchema);
