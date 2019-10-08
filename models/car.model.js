const mongoose = require("mongoose")
const Schema = mongoose.Schema

let carScheme = new Schema({
    merk : String,
    jenis : String,
    jumlah : String,
    author : String,
    created_at : {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type : Date,
        default : Date.now()
    }
})

let Car = mongoose.model("Car",carScheme)
module.exports=Car