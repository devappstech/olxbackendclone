const Category = require('../../models/category/category')
module.exports = {
  create: ( req, res) => {
    
  },
  index: async( req, res) => {
    const result = await Category.find({})
    res.status(200).json(result)
  }
}