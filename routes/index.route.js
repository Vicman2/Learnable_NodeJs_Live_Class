const express = require('express')
const router = express.Router()
const bookRoute = require('./book.route')

router.use('/book', bookRoute)

module.exports = router