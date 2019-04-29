/*

this also needs to be refactored
- general should be information used throughout the app
    firstName, lastName, email, github
- github, twitter, facebook, and linkedin should only be names
    not full urls
- information should have a short blurb about the person
    information.synopsis
- zipCode should be a string, not a number
- houseNumber should be a string, not a number

*/

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
    username: {
        type: String,
        required: true,
        unique: true
    },
    general: {
        key: {
            type: String,
            default: 'general'
        },
        firstName: String,
        lastName: String,
        age: Number,
        gender: String
    },
    portfolio: {
        key: {
            type: String,
            default: 'portfolio'
        },
        apps: [AppSchema]
    },
    information: {
        key: {
            type: String,
            default: 'information'
        },
        skills: Array,
        technologies: Array,
        languages: Array
    },
    contact: {
        key: {
            type: String,
            default: 'contact'
        },
        email: String,
        telephone: String,
        github: String,
        twitter: String,
        linkedin: String,
        facebook: String
    },
    location: {
        key: {
            type: String,
            default: 'location'
        },
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