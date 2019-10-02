const express = require('express')
const router = express.Router()
const DosenModel = require("../models/dosen")

router.post("/", (req,res) => {
    let { nid, nama, kelamin, umur, alamat} = req.body
    var insert_data = {
        nid,
        nama,
        kelamin,
        umur,
        alamat
    }

    let data = new DosenModel(insert_data)
    data.save()

    return res.send({
        status: "success",
        data,
        message: "Dosen created success"
    })
})

    router.get("/tampil", async (req,res) => {
        let data = await DosenModel.find({}).exec()

        return res.send({
            status: "success",
            data,
            message: "Get all data dosen"
        })
    })
module.exports = router