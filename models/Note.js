const mongoose = require('../db/connection')

const noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model('Note', noteSchema)

