const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const sellerSchema =  new Schema({
  fullName: {
    type: String,
    min: 3,
    required: [true, 'The name is required']
  },
  email: {
    type: String,
    min: 3,
    unique: [true, 'this is email already used. Please choice other.'],
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
  },
  ads:[{
    type: Schema.Types.ObjectId,
    ref: 'ad'
  }]
})


sellerSchema.pre('save', async function(next){
    console.log('fui chamado..')
    console.log(this.password, this.confirmPassword)
    this.password === this.confirmPassword ? next() : next(new Error('your password doesn\'t match'))
});

sellerSchema.pre('save', async function(next){
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password, salt)
    const hashedConfirmPassword = await bcrypt.hash(this.confirmPassword,salt)
    this.password = hashedPassword
    this.confirmPassword = hashedPassword
    next()
  } catch (error) {
    next(error)
  }
})


const sellerModel = mongoose.model('seller', sellerSchema)

module.exports = sellerModel