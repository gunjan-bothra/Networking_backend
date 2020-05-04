const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrationSchema = new Schema({
    googleId: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Registration', registrationSchema); // This 'Registartion' will be used in application to connect schema with the application