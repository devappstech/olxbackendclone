const Ad = require('../../models/ad/ad')
const Category  = require('../../models/category/category')

module.exports = {
  create: async(req, res) => {
    const newAd = new Ad(req.body)
    const result = await newAd.save()
    res.status(200).json(result)
  },
  index: async (req, res) => {
    const result = await Ad.find({})
    res.status(200).json(result)
  },
  remove: async (req, res) => {
    const { id } = req.params
    const result = await Ad.findByIdAndRemove(id)
    res.status(200).json({ message: true })
  }
}

