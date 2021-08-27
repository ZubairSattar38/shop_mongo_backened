var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var retailerBillSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    billNo: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    rid: {
        type: Schema.Types.ObjectId,
        references: {
            model: 'retailer', // 'fathers' refers to table name
            key: 'id', // 'id' refers to column name in fathers table
        }
    },
    totalAmount: {
        type: Schema.Types.ObjectId,
    },
    productCount: {
        type: Schema.Types.ObjectId,
    },
    date: {
        type: Sequelize.DATE,
    }
});
module.exports = mongoose.model('RetailerBill', retailerBillSchema);
