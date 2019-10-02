const express = require('express')
const router = express.Router()
const BookModel = require("../models/book")

router.post("/", (req,res) => {
    let { title, description } = req.body
    var insert_data = {
        title,
        description
    }

    let data = new BookModel(insert_data)
    data.save()

    return res.send({
        status: "success",
        data,
        message: "Book created succes"
    })
})

router.get("/tampil", async (req, res) => {
    // let data = await getAll()
    let data = await BookModel.find({}).exec()

    return res.send({
        status: "success",
        data,
        message: "Get all book data"
    })
})
module.exports = router