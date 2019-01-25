// Create connection between Node and MySQL
var mysql = require("mysql");
require("dotenv").config();
var connection;
if(process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DATABASE
    });
}


// Establish the connection
connection.connect(function(error){
    if(error) {
        console.log("error connecting: " + error.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;

