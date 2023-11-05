const sql = require("mysql2");
const dotenv = require("dotenv").config();
const db1 = sql.createConnection({
    host: process.env.DATABASE_HOST1,
    user: process.env.DATABASE_USER1,
}).then((connection) => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE1};`);
    connection.changeUser({database: process.env.DATABASE1});
    connection.query("CREATE TABLE IF NOT EXISTS archieved_inputted_table2(rasa_id int(11) NOT NULL, full_name varchar(255) NOT NULL, event_day date NOT NULL, event_name varchar(255) NOT NULL, event_description varchar(255) NOT NULL, start_time time NOT NULL, end_time time NOT NULL, rasa_status varchar(255) NOT NULL);");
});

module.exports = db1;