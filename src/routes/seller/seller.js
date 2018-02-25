const express = require('express')
const router = require('express-promise-router')()
const seller = require('../../controllers/seller/seller')

router.route('/in:id')
  .post(seller.sigin)

router.route('/up:id')
  .post(seller.sigup)


module.exports = router