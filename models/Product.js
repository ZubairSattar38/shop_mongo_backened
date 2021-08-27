var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        allowNull: false,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        isEmail: true,
    },
    depID: {
         type: Schema.Types.ObjectId,
        references: {
            model: 'department', // 'fathers' refers to table name
            key: 'id', // 'id' refers to column name in fathers table
        }
    },
    catID: {
         type: Schema.Types.ObjectId,

        references: {
            model: 'category', // 'fathers' refers to table name
            key: 'id', // 'id' refers to column name in fathers table
        }
    },
    contactNo: {
        type: Sequelize.INTEGER
    },
    salary: {
         type: Schema.Types.ObjectId,

        required: true,
    },
    barcode: {
        type: String,
        required: true,
        unique: true
    },
    retailerBillID:{
        type : Sequelize.NUMBER,
        required: true,
    },
    sid:{
         type: Schema.Types.ObjectId,

    },
    stuff:{
        type: Sequelize.STRING
    },
    rid: {
         type: Schema.Types.ObjectId,

        references: {
            model: 'retailer', // 'fathers' refers to table name
            key: 'id', // 'id' refers to column name in fathers table
        }
    },
    retailPrice:{
         type: Schema.Types.ObjectId,

    },
    salePrice:{
         type: Schema.Types.ObjectId,

    },
    shopQty:{
         type: Schema.Types.ObjectId,

    },
    storeQty:{
         type: Schema.Types.ObjectId,

    },
});
module.exports = mongoose.model('Product', productSchema);
