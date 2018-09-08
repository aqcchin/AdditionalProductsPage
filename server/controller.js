const { products, designers } = require('../database/index.js');

module.exports = {
  getProduct: (req, res) => {
    products.findRandom({}, {}, { limit: 6 }, function (err, results) {
      if (err) {
        res.status(404).send('Error');
      } else {
        res.status(200).json(results);
      }
    });
  },

  postProduct: (req, res) => {
    console.log('inside postproduct');
    res.status(200).send('success');
  },
  getDesigner: (req, res) => {
    console.log('HEYYYYYYYYY');
    designers.findRandom({}, {}, { limit: 1 }, function (err, results) {
      if (err) {
        res.status(404).send('Error');
      } else {
        res.status(200).json(results);
      }
    });
  },
  postDesigner: (req, res) => {
    console.log('inside postdesigner');
    res.status(200).send('success');
  }
}