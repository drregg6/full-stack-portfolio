const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the MongoDB Schema
// -- to be updated --
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

module.exports = User = mongoose.model('user', UserSchema);