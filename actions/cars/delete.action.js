const Car = require("../../models/car.model")

class DeleteCar {
    constructor(id) {
        this.id=id
    }

    async exec() {
        try{
            let query = await Car.findOne({
                _id: this.id
            }).exec()

            return query
        
        } catch(err) {
            throw err
        }
    }
}

module.exports = DeleteCar