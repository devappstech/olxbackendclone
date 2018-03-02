const Seller = require('../../models/seller/seller')
const Ad = require('../../models/ad/ad')
const Category = require('../../models/category/category')

module.exports = {
  signin: async (req, res) => {
    const { id } = req.params
    const result = await Seller.findById(id)
    req.status(200).json(result)
  },
  signup: async (req, res) => {
    const { confirmPassword, password, phone } = req.body
    const newSeller = new Seller(req.body)
    const result = await newSeller.save()
    console.log(password)
    res.status(200).json(result)
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