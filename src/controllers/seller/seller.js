const Seller = require('../../models/seller/seller')

module.exports = {
  sigin: async (req, res) => {
    const { id } = req.params
    const result = await Seller.findById(id)
    req.status(200).json(result)
  },
  sigup: async (req, res) => {
    const { id } =  req.params
    const result = await Seller.findById(id)
    req.status(200).json(result)
  }
}