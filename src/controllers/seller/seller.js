const Seller = require('../../models/seller/seller')

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
}
}