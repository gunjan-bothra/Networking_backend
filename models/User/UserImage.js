const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userImageSchema = new Schema({
    imageUrl: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('UserImage', userImageSchema); 