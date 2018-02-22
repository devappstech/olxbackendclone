const express = require('express')

const app = express()

const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 8000

const mongoose = require('./src/database/database')
// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())

//routers 
const category = require('./src/models/category/category')


app.use('/categories', category)

// server
app.listen(port, () => {
  console.log(`Server stand up in port http://localhost:${port}`)
})