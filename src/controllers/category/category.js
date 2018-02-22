const Category = require('../../models/category/category')
module.exports = {
  create: async ( req, res) => {
    const newCategory = new Category(req.body)
    const result = await newCategory.save()
    res.status(200).json(result)
  },
  index: async ( req, res) => {
    const result = await Category.find({})
    res.status(200).json(result)
  },
  one: async (req, res) => {
    const { id } = req.params
    const result = await Category.findById(id)
    res.status(200).json(result)
  },
  update: async (req, res) => {
    const { id } = req.params
    const newCategory =  req.body
    const result = await Category.findByIdAndUpdate(id, newCategory)
    res.status(200).json({ message: true })
  },
  remove:async (req, res) => {
    const { id } = req.params
    const result = await Category.findByIdAndRemove(id)
    res.status(200).json({message: true })
  }
}