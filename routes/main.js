const users = require("./users")
const index = require("./index")
const books = require("./books")
const shops = require("./shop.route")
const car = require("./car.route")



const routes = (app) => {
    app.use("/", index)
    app.use("/book", books)
    app.use("/shop", shops)
    app.use("/user", users)
    app.use("/car",car)
}



module.exports = routes