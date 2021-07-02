const mongoose = require('mongoose');

const NewPostSchema = new mongoose.Schema({

    drinkname: {
        type: String,
        default: ''
    },
    barname: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    photo: {
        type: Image,
    },
    deleted: {
        type: Boolean,
        default: false
    }

});


module.exports = mongoose.model('newPost', NewPostSchema);
