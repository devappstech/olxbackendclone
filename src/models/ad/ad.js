const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AdSchema = new Schema({
  title: {
    type: String,
    min: 5,
    required: [true, 'Title is required']
  },
  date: {
    type: Date,
    default: Date.now
  },
  price: {
    type: Number,
    required: [true, 'The Value of Price is Required']
  },
  description: {
    type: String
  },
  category:[{
    type: Schema.Types.ObjectId,
    ref: 'cateory'
  }],
  localization: {
    type: String,
  }
})

const adModel = mongoose.model('ad', AdSchema)

module.exports = adModel