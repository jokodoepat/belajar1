const mongoose = require("mongoose")
const Scheme = mongoose.Schema

let dosenSchema = new Scheme({
    nid: String,
    nama: String,
    kelamin: String,
    umur: String,
    alamat: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }

})

let Dosen = mongoose.model("Dosen", dosenSchema)
module.exports=Dosen