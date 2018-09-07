const { products, designers } = require('../database/index.js');

module.exports = {
  getProduct: (req, res) => {
    console.log('inside getproduct');
    res.status(200).send('success');
  },
  postProduct: (req, res) => {
    console.log('inside postproduct');
    res.status(200).send('success');
  },
  getDesigner: (req, res) => {
    console.log('inside getdesigner');
    res.status(200).send('success');
  },
  postDesigner: (req, res) => {
    console.log('inside postdesigner');
    res.status(200).send('success');
  }
}