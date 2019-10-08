const mongoose = require("mongoose")
const Schema = mongoose.Schema
const moment = require('moment-timezone')
const indo = moment.tz(Date.now(), "Asia/Jakarta")

let userSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    created_at: {
        type: String,
        //default: indo
    },
    updated_at: {
        type: Date,
        //default: indo
    },
    deleted_at: {
        type: String,
        default: null
    }
})

let User = mongoose.model("User", userSchema)

module.exports = User