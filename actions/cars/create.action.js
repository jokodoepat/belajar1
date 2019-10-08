const Car = require("../../models/car.model")

class CreateCar {
    constructor(req) {
        this.merk = req.body.merk,
        this.jenis = req.body.jenis,
        this.jumlah = req.body.jumlah,
        this.author = req.body.author
    }

    async exec() {
        try {
            let query = new Car({
                merk: this.merk,
                jenis: this.jenis,
                jumlah: this.jumlah,
                author: this.author

            })
            await query.save()
            return query
        } catch(err) {
            throw err
        }
    }
}

module.exports = CreateCar