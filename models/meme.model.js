const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const MemeSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date().toDateString()
    },
    ratings: {
        type: Array,
        default: []
    },
    comments: {
        type: String,
        default: ''
    }
});

const Meme = mongoose.model('Meme', MemeSchema);
module.exports = Meme;