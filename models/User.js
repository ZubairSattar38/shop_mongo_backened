var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const environment = process.env.NODE_ENV;
const stage = require('../config')[environment];
const saltRounds = 10;

var Schema = mongoose.Schema;

var userSchema = new Schema({
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
    desId: {
        type: Schema.Types.ObjectId,
        references: {
            model: 'designation', // 'fathers' refers to table name
            key: 'id', // 'id' refers to column name in fathers table
        }
    },
    contactNo: {
        type: Schema.Types.ObjectId
    },
    salary: {
        type: Schema.Types.ObjectId,
        required: true,
    },
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
