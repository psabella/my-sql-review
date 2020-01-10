// TODO
const db = require('./index.js');
module.exports = {
  readAll: (callback) => {
    db.query("SELECT * FROM tennis;",(err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
    // need to send the data back to the client
  },
  addItem: ({item_name, amount}, callback) => { // note the object destructuring on this line
    db.query(`INSERT INTO tennis (item_name, amount) VALUES ('${name}', ${amount});`, err => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  }
};