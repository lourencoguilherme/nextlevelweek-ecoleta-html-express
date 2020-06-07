const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/databases/database.db")

module.exports = db
// db.serialize(() => {
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         name TEXT,
    //         image TEXT,
    //         address TEXT,
    //         complement TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // const query = `
    //     INSERT INTO places (name, image, address, complement, state, city, items) VALUES (?,?,?,?,?,?,?)
    // `

    // const values1 = [
    //     "Colectoria"
    //     ,"https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80"
    //     ,"Guilherme Gemballa, Jargin América"
    //     ,"Número 260"
    //     ,"Rio do Sul"
    //     ,"Santa Catarina"
    //     ,"Resíduos Eletrônicos, Lâmpadas"
    // ] 
    // const values2 = [
    //     "Papersider"
    //     ,"https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    //     ,"Guilherme Gemballa, Jargin América"
    //     ,"Número 260"
    //     ,"Rio do Sul"
    //     ,"Santa Catarina"
    //     ,"Papéis e Papelão"
    // ] 


    // function affterInsertData(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // db.run(query, values1, affterInsertData)
    // db.run(query, values2, affterInsertData)

    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Consultado com sucesso")
    //     console.log(rows)
    // })

    // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Deletado com sucesso")
    //     console.log(this)
    // })

    // db.run(`DELETE FROM places WHERE id > 0`, function(err){
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Deletado com sucesso")
    //     console.log(this)
    // })
// })