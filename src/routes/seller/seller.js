const express = require('express')
const router = require('express-promise-router')()
const seller = require('../../controllers/seller/seller')

router.route('/signin')
  .post(seller.signin)

router.route('/signup')
  .post(seller.signup)


module.exports = router