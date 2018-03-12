const express = require('express')
const router = require('express-promise-router')()
const seller = require('../../controllers/seller/seller')
const passport = require('../auth/passport')
const multer = require('multer')
const upload = multer({ dest: './src/uploads' })

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
  .post(passport.authenticate('jwt', { session: false }),upload.array('photos',10),seller.createAd)

router.route('/:id/ad/:id')
  .get(seller.oneAd)
  .put(seller.updateAd)
  .delete(seller.removeAd)


module.exports = router