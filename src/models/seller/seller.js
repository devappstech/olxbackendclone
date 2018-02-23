const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SellerSchema =  new Schema({
  fullName: {
    type: String,
    min: 3,
    required: [true, 'The name is required']
  },
  email: {
    type: String,
    min: 3,
    required: [true, 'The email is required']
  },
  phone: {
    type: String,
    min: 10,
    required: [true, 'The phone is required']
  },
  password:{
    type: String,
    min: 6,
    max: 12,
    required: [true, 'Password is required'],
    select: false
  },
  confirmPassword:{
    type: String,
    min: 6,
    max: 12,
    required: [true, 'Confirm Password is required'],
    select: false
  }
})

const sellerModel = mongoose.model('seller', SellerSchema)

module.exports = sellerModel