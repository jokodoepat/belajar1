const Car = require("../../models/car.model")

class GetAll {
    constructor() {

    }

    async exec() {
        try {
            let query = await Car.find({}).exec()
            return query
        } catch(err) {
            throw err
        }
    }
}

module.exports = GetAll