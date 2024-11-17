require("dotenv").config()

const cors = require("express")
const express = require("express")
const routes = require("./routes")

// express app
const app = express()
const PORT = process.env.PORT

// middleware
app.use(cors({ credentials: true, origin: '*'}))
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use("/notify/", routes)

// server
app.listen(PORT, () => {
    console.log(`Notification microservice listening on http://localhost:${PORT}...`)
})