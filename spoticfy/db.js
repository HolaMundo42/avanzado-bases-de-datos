const mysql = require("mysql2");

const conn = mysql.createConnection({
    // Completar con los datos de la conexión
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "spoticfy",
});

conn.connect((err) => {
    if (err) {
        console.error("Error conectándose: " + err);
        return;
    }

    console.log("Base de datos conectada");
});

module.exports = conn;
