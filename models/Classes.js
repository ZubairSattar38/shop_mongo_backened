const { ObjectID } = require('mongodb');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var classSchema = new Schema({
    className: {
        type: String,
        trim: true,
    }, timeDuration: { type: Date, default: Date.now }
    ,courseId: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course"
        }
      ],teacherId: [{
        type: Schema.Types.ObjectId,
        ref: "User"
      }],studentId:[
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
      ]
});
module.exports = mongoose.model('Class', classSchema);
