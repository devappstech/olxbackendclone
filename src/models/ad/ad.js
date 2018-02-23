const mongoose = require('mongoose')

const Schema = mongoose.Schema

const adSchema = new Schema({
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
  seller: {
    seller: seller._id,
    required: [true, 'Seller is required']
  },
  localization: {
    type: String,
  }
})

const adModel = mongoose.model('ad', adSchema)

module.exports = adModel