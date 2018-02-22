const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/olxapi', () => {
  console.log('database connected')
})

module.exports =  mongoose