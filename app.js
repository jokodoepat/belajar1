const express = require('express')
const app = express()
require("./db")
const moment = require('moment-timezone')
const indo    = moment.tz(Date.now(), "Asia/Jakarta");
// const newYork    = moment.tz(Date.now(), "America/New_York");
const baru = indo.format()
// const eww = Date.now()

console.log(baru);

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

require('./routes/main')(app) // all routes imported

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})