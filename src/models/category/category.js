const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CategorySchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  ads:[{
    type: Schema.Types.ObjectId,
    ref: 'ad'
  }]
})

const categoryModel = mongoose.model('category', CategorySchema)

module.exports = categoryModel