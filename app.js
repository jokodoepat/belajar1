const express = require('express')
const app = express()
require("./db")

// const index_routes = require("./routes/index")
const book_routes = require("./routes/books")
const dosen_routes = require("./routes/dosens")
// const users = require("./routes/users")

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send('Welcome')
})

// app.use("/index", index_routes)
app.use("/book", book_routes)
app.use("/dosen", dosen_routes)
// app.use("/user", users)

app.listen(3300, () => {
    console.log('Example app listening on posrt 3300')
})