// TODO
// import the db
const db = require('./index.js');
const data = [
  {
    amount: 3,
    item_name: "racket"
  },
  {
    amount: 2,
    item_name: "nets"
  },
  {
    amount: 1,
    item_name: "court"
  },
  {
    amount: 4,
    item_name: 'shorts'
  },
  {
    amount: 5,
    item_name: 'balls'
  }
]

// write sql code w/ `...`
data.forEach(({amount, item_name}) => {
  db.query(`INSERT INTO tennis
    (amount, item_name)
    VALUES
      (${amount}, '${item_name}');`);
});

