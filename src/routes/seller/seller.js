const express = require('express')
const router = require('express-promise-router')()
const seller = require('../../controllers/seller/seller')

router.route('/signin')
  .post(seller.signin)

router.route('/signup')
  .post(seller.signup)

router.route('/')
  .get(seller.index)
 
router.route('/:id')
  .get(seller.one)

router.route('/:id/ad')
  .get(seller.indexAd)
  .post(seller.createAd)

router.route('/:id/ad/:id')
  .get(seller.oneAd)
  .put(seller.updateAd)
  .delete(seller.removeAd)


module.exports = router