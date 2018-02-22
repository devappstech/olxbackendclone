const express = require('express')

const router = require('express-promise-router')()

const Category = require('../../controllers/category/category')

router.route('/')
  .get(Category.index)
  .post(Category.create)

module.exports = router