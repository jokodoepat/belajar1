const Car = require("../../models/car.model")

class ShowCar {
    constructor(id) {
        this.id = id
    }
    
    async exec() {
        try {
            let query = await Car.findOne({
                _id: this.id
            }).exec()

            return query
        } catch(err) {
            throw err
        }
    }

    

}

module.exports = ShowCar