const mysql = require('mysql')

require('dotenv').config()

const db = mysql.createPool({
    host: "us-cdbr-iron-east-04.cleardb.net",
    user: "b1319838ea3262",
    password: "17987351",
    database: "heroku_121ab46c32c2683"
})



module.exports = {
    db
}