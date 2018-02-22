const express = require('express')

const router = require('express-promise-router')()

const Category = require('../../controllers/category/category')

router.router('/')
  .get(Category.index)
  .post(Category.create)

