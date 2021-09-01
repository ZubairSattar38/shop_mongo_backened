var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var colorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        references: {
            model: 'Category', // 'fathers' refers to table name
            key: '_id', // 'id' refers to column name in fathers table
        }
    },
});
module.exports = mongoose.model('Color', colorSchema);
