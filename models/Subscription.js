var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var subscriptionSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    expire_date:{
        type:Date,
        required: true,
    },
    in_working_till:{
        type:Date,
        required: true,
    },
    status:{
        type: Boolean,
    }
});
module.exports = mongoose.model('subscription', subscriptionSchema);
