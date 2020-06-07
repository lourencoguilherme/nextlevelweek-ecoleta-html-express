const express = require('express')

const server = express()

// confurar pasta public

server.use(express.static("public"))


// utilizando templete engine

const nunjucks = require("nunjucks")

nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})


server.get("/serch-results", (req, res) => {
    res.sendFile(__dirname + "/views/serch-results.html")
})

server.listen(3000)

