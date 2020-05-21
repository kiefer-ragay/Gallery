const mysql = require('mysql');

const mysqlConfig = {
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'gallery',
};
const connection = mysql.createConnection(mysqlConfig);
module.exports = connection;
