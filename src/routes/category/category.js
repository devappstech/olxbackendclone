const express = require('express')

const router = require('express-promise-router')()

const Category = require('../../controllers/category/category')

router.route('/')
  .get(Category.index)
  .post(Category.create)

router.route('/:id')
  .get(Category.one)
  .put(Category.update)
  .delete(Category.remove)
module.exports = router