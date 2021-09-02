var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    department: { type: Schema.Types.ObjectId, ref: 'Department' },
});
module.exports = mongoose.model('Category', categorySchema);
