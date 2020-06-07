const express = require('express')

const server = express()

// configura banco de dados

const db = require("./databases/db")

// habilitar o uso do req.body na nossa url
server.use(express.urlencoded({ extended: true }))



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
    // console.log(req.query)
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    console.log(req.body)
    const data = req.body

    const query = `
        INSERT INTO places (name, image, address, complement, state, city, items) VALUES (?,?,?,?,?,?,?)
    `

    const values = [
        data.name, 
        data.image, 
        data.address, 
        data.complement, 
        data.state, 
        data.city, 
        data.items
    ] 


    function affterInsertData(err) {
        if(err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
        return res.render("create-point.html", {saved: true})
    }

    db.run(query, values, affterInsertData)

})

server.get("/search-results", (req, res) => {
    
    const search = req.query.search

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        const total = rows.length

        return res.render("search-results.html", { places: rows, total })
    })
    
    
})

server.listen(3000)

