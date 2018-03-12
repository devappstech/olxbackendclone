const express = require('express')
const router = require('express-promise-router')()
const seller = require('../../controllers/seller/seller')
const passport = require('../auth/passport')



router.route('/signin')
  .post(passport.authenticate('local', { session: false}),seller.signin)

router.route('/signup')
  .post(seller.signup)

router.route('/')
  .get(seller.index)
 
router.route('/:id')
  .get(seller.one)

router.route('/:id/ad')
  .get(passport.authenticate('jwt', { session: false }),seller.indexAd)
  .post(passport.authenticate('jwt', { session: false }),seller.createAd)

router.route('/:id/ad/:id')
  .get(seller.oneAd)
  .put(seller.updateAd)
  .delete(seller.removeAd)


module.exports = router