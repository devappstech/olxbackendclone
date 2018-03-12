const jwt = require('jsonwebtoken')
const env = require('../../../.env')

module.exports = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if(!authHeader){
    return res.status(401).json({ error: "no token provider" })
  }

  const parts = authHeader.split(" ");

  if(!parts.length === 2){
    return res.status(401).json({ error: "token Error" }) 
  }
  const [ scheme, token ] = parts;

  if(!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ error: "token malformatted" })
  }

  jwt.verify(token, env.secret, (err, decode) => {
    if(err) return res.status(400).json({error: "token invalid" })
  
  req.sellerId = decode.id
  return next()
  })
}