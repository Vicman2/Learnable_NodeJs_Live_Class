const mongoose = require('mongoose')


const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('BookModel', BookSchema)