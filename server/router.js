const express = require('express');
const router = express.Router()
const controller = require('./controller.js')

router.route('/product')
  .get(controller.getProduct)
  .post(controller.postProduct)


router.route('/designer')
  .get(controller.getDesigner)
  .post(controller.postDesigner)

module.exports = router;