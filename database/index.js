// TODO
const mysql = require('mysql');

// create a database object
const db = mysql.createConnection({
  user: 'root',
  password: '63zczRdR',
  database: 'ball'
});

// establish connection with the database
db.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("DB online");
  }
});

module.exports = db;