const Seller = require('../../models/seller/seller')
const Ad = require('../../models/ad/ad')
const Category = require('../../models/category/category')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const env = require('../../../.env')

function generateToken(params = {}) {
  return jwt.sign(params, env.secret,{ expiresIn: 86400, })
}

module.exports = {
  signin: async (req, res) => {
    const { email, password } = req.body
    const result = await Seller.findOne({ email }).select("+password")
    if(!result)
      res.status(400).json({ message: "user not found" })
    
    if(!await bcrypt.compare(password, result.password)){
      return res.status(401).json({ error: "user or password incorrect" })
    }
    result.password = undefined
    res.status(200).json({'result': result,'token :': generateToken({id: result.id})})
  },
  signup: async (req, res) => {
    const { email } = req.body
    if(await Seller.findOne({ email })){
      res.status(400).json( { err: 'e-mail already exist' })
    }
    const result = await Seller.create(req.body)
    result.password = undefined
    result.confirmPassword = undefined
    res.status(200).json({'result': result, 'token :': generateToken({ id: result.id })})
  },
  index: async (req, res) => {
    const result = await Seller.find({})
    res.status(200).json(result)
  },
  one: async (req, res) => {
    const { id } = req.params
    const result = await Seller.findById(id)
    res.status(200).json(result)
  },
  createAd: async (req, res) => {
    const sellerId  = req.params.id
    const categoryId  = req.body.categories
    const newAd = new Ad(req.body)
    const searchSeller = await Seller.findById(sellerId)
    const searchCategory = await Category.findById(categoryId)
    newAd.seller.push(searchSeller)
    newAd.categories.push(searchCategory)
    searchCategory.ads.push(newAd)
    const saveCategoryAds = await searchCategory.save()
    const saveAd = await newAd.save()
    searchSeller.ads.push(newAd)
    const sallerSave = await searchSeller.save()
    
    res.status(200).json(newAd)
  },  
  indexAd: async (req, res) => {
    const { id } = req.params
    console.log( id )
    const result = await Seller.findById(id).populate('ad')
    res.status(200).json(result.ads)
  },
  oneAd: async (req, res) => {
    
  },
  updateAd: async (req, res) => {

  },
  removeAd: async (req, res) => {

  },

}