var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSizeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    depID: {
        type: Schema.Types.ObjectId,
        references: {
            model: 'department', // 'fathers' refers to table name
            key: 'id', // 'id' refers to column name in fathers table
        }
    },
});
module.exports = mongoose.model('ProductSize', productSizeSchema);
