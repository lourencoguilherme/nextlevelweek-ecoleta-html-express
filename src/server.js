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
    return res.render(__dirname + "index.html")
})

server.get("/create-point", (req, res) => {
    return res.render(__dirname + "create-point.html")
})


server.get("/serch-results", (req, res) => {
    return res.render(__dirname + "serch-results.html")
})

server.listen(3000)

