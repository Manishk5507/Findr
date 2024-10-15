const {Schema} = require('mongoose');

const UserSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    address:String,
    date: {type: Date, default: Date.now}
});

module.exports = UserSchema;
