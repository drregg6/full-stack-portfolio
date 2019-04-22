const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the MongoDB Schema
const AppSchema = new Schema({
    name: String,
    url: String,
    technologies: Array,
    image: String
});


const UserSchema = new Schema({
    name: { type: String, required: true },
    apps: [AppSchema],
    information: {
        skills: Array,
        technologies: Array,
        languages: Array
    },
    contact: {
        email: String,
        telephone: String,
        github: String,
        twitter: String,
        linkedin: String,
        facebook: String
    },
    location: {
        houseNumber: Number,
        street: String,
        apartment: String,
        city: String,
        state: String,
        country: String,
        zipCode: Number
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;