const sql = require("mysql2");
const dotenv = require("dotenv").config();
/*const db1 = sql.createConnection({
    host: process.env.DATABASE_HOST1,
    user: process.env.DATABASE_USER1,
    password: process.env.DATABASE_PASSWORD1,
    database: process.env.DATABASE1
})*/
const db1 = sql.createConnection({
    host: process.env.DATABASE_HOST1,
    user: process.env.DATABASE_USER1,
    password: process.env.DATABASE_PASSWORD1
})

module.exports = db1;