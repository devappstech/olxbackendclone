const mongoose = require('mongoose')

const axios = require('axios')

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
  seller: [{
    type: Schema.Types.ObjectId,
    ref: 'seller',
    // require: true,
    max: 1
  }],
  localization: {
    cep: {
      type: String,
      required: [true, "cod is required"]
    },
    logradouro: {
      type: String,
    },
    bairro: {
      type: String
    },
    neighborhood:{
      type: String
    },
    localidade: {
      type: String
    },
    uf: {
      type: String,
      required: [true, 'uf is required'],
      uppercase: true,
      max: 2
    }
  }
})


adSchema.pre('save',async function (next) {
const URL = `https://viacep.com.br/ws/${this.localization.cep}/json/`

      const result = await axios.get(URL).then( resp => {
        this.localization = resp.data
        next()
        }).catch(function (error){
         next(error)
       })
})
const adModel = mongoose.model('ad', adSchema)

module.exports = adModel