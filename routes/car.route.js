const express = require('express')
const router = express.Router()
const ShowCar = require("../actions/cars/show.action")
const CreateCar = require("../actions/cars/create.action")
const UpdateCar = require("../actions/cars/update.action")
const DeleteCar = require("../actions/cars/delete.action")
const GetAllCar = require("../actions/cars/getAll.action")

router.post("/", async(req,res) => {
    try{
        let data = await new CreateCar(req).exec()
        return res.status(201).json({
            status  : "success",
            data,
            message: "Car created"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.get("/", async (req,res) => {
    try {
        let data = await new GetAllCar().exec()
        return res.send({
            status:"success",
            data,
            message:"Berhasil Get All"
        }) 
    } catch(err) {
            return res.status(400).json({
                status: "error",
                message: err.message
            })
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        let { id } = req.params
        let data = await new ShowCar(id).exec()
        console.log(`Type of ShowCar is ${typeof ShowCar}`)

        return res.status(200).json({
            status: "success",
            data,
            message: "Get detail of Car"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.delete('/:id', async(req, res)=>{
    let {id} = req.params
    try{
        let data = await new DeleteCar(id).exec()
        return res.status(400).json({
            status: 'success',
            data,
            message: 'data berhasil dihapus'
        })
    }catch(err){
        return res.status(200).json({
            status: 'error',
            data,
            message: err.message
        })
    }
})



router.put('/:id', async(req, res)=>{
    try {
        let { id } = req.params
        let data = await new UpdateCar(id,req).exec()

        return res.status(201).json({
            status: "success",
            data,
            message: "Car updated successfully"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

module.exports = router