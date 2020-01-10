const models = require('../database/models.js');

const controllers = {
  getItems: (req, res) => {
    // TODO
    models.readAll((err, result) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(result);      }
    });
    console.log('We got it');
  },
  postItems: (req, res) => {
    // TODO
    models.addItem(req.body, err => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(201).send("item added");
      }
    });
    console.log('This is your post request speaking')
  }
}

module.exports = controllers;