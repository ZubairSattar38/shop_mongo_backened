var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const environment = process.env.NODE_ENV;
const stage = require('../config')[environment];
const saltRounds = 10;

var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },cnic: {
        type: String,
        trim: true,
        unique: true
    }, qualification: {
        type: String,
        trim: true,
    }, gender: {
        type: String,
        trim: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    roll: {
        type: String,
        required: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        trim: true,
    },classes:[
        {
          type: Schema.Types.ObjectId,
          ref: "Class"
        }
      ],
    //   teacherId: [
    //     {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "User"
    //     }
    //   ],
      studentId: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"  
        }
      ],

});

userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified || !user.isNew) {
        next();
    } else {
        bcrypt.hash(user.password, saltRounds, function (err, hash) {
            if (err) {
                console.log("user ", user)
                console.log('Error hashing password for user', user.userName);
                next(err);
            } else {

                user.password = hash;

                next();
            }
        })
    }
})
module.exports = mongoose.model('User', userSchema);
