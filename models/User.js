var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const environment = process.env.NODE_ENV;
const stage = require('../config')[environment];
const saltRounds = 10;

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
    },
    image_url: {
        type: String,
    },
    nic: {
        type: String,
    },
    contact: {
        type: String,
    },
});
module.exports = mongoose.model('User', userSchema);
