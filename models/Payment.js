var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PaymentSchema = new Schema({
    bill_month_name: {
        type: String,
        required: true,
    },
    arrears: {
        type: Number,
        required: true,
    },
    fine: {
        type: Number,
        required: true,
    },
    issue_date: {
        type: Date,
        required: true,
    },
    last_date: {
        type: Date,
        required: true,
    },
    payment_date: {
        type: Date,
        required: true,
    },
    amount_pay: {
        type: Number,
        required: true,
    },
    remainings: {
        type: Number,
        required: true,
    },
    image_url: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
    }
});
module.exports = mongoose.model('payment', PaymentSchema);
