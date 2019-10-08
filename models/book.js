const mongoose = require("mongoose")
const Schema = mongoose.Schema
// const moment = require('moment-timezone')
// const dateindo    = moment.tz(Date.now(), "Asia/Jakarta")
// const waktu = Date.parse(dateindo.format())

let bookSchema = new Schema({
    title: String,
    description: String,
    price: {
        type: Number,
        default: 0
    },
    author: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
})

let Book = mongoose.model("Book", bookSchema)

module.exports = Book