var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var seasonSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    department: {
        type: Schema.Types.ObjectId,
        references: {
            model: 'Department', // 'fathers' refers to table name
            key: '_id', // 'id' refers to column name in fathers table
        }
    },
});
module.exports = mongoose.model('Season', seasonSchema);
