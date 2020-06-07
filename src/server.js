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
    return res.render("index.html", { headerTitle: "Cadastre um ponto de coleta" })
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})


server.get("/search-results", (req, res) => {
    return res.render("search-results.html")
})

server.listen(3000)

