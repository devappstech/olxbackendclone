const passport = require('passport')
const JWTStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')
const passportLocalStrategy = require('passport-local')
const env = require('../../../.env')
const Seller = require('../../models/seller/seller')

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: env.secret
}, async(payload, done) => {
    try {
      const seller = await Seller.findById(payload.id)

      if(!seller) return done(null, false)

      done(null, seller)
    } catch (error) {
      done(error, false)
    }
}))

passport.use(new passportLocalStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
    try {
      const seller = await Seller.findOne({email}).select('+password')

      if(!seller) return done(null, false)
      if(!await seller.verifyPasswordLogin(password)) return done(null, false)
      
      done(null, seller)
    } catch (error) {
      done(error, false)
    }
}))

module.exports = passport