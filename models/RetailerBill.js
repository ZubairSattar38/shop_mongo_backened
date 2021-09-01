var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var retailerBillSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    billNo: {
        type: String,
        required: true,
        unique:true
    },
    retailer_id:{ type: Schema.Types.ObjectId,ref: 'Retailer' },
    issue_date:{
        type:Date,
        required: true,
    },
    expire_date:{
        type:Date,
        required: true,
    },
    total_quantity:{
        type:Number,
    },
    total_amount:{
        type:Float64Array,
    },
    status:{
        type:Boolean
    }
    
});
module.exports = mongoose.model('RetailerBill', retailerBillSchema);
