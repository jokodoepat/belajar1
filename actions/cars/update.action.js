const Car = require("../../models/car.model")

class UpdateCar {
    constructor(id,req) {
        this.id = id
        this.merk = req.body.merk,
        this.jenis = req.body.jenis,
        this.jumlah = req.body.jumlah,
        this.author = req.body.author
    }

    async exec() {
        try {
            let query = {
                merk: this.merk,
                jenis: this.jenis,
                jumlah: this.jumlah,
                author: this.author

            }

            let query1 = await Car.findByIdAndUpdate({
                _id:this.id
            },
            query,
            {
                new:true
            }).exec()
            
            return query1
        } catch(err) {
            throw err
        }
    }

}

module.exports = UpdateCar