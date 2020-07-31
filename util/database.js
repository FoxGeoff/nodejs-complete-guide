const mysql = require('mysql2');

const pool = mysql.createPool({ 
    host: 'localhost:3306',
    user: 'root',
    database: 'local_ai_prod2',
    password: 'address##'
});

module.exports = pool.promise();