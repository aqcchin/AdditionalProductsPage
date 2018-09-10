const { products, designers } = require('../database/index.js');

module.exports = {
  getProduct: (req, res) => {
    var filterType = req.query.type;
    var filterProductLine = req.query.productLine;

    if (filterType) {
      // Get only products matching this filter type
    } else if (filterProductLine) {
      // Get only products matching this filter type
    }

    // No filter functionality is implemented currently, so using the below 
    // code to retrieve random entries from the database
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
    var productLine = req.query.productLine;

    // Implement a db query using the product line above, find the designer who created the product line

    // No filter functionality is implemented currently, so using the below 
    // code to retrieve random entries from the database
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