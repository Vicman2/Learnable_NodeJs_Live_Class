const express = require('express')
const router = express.Router()
const bookController = require('../controllers/book.controller')
const authenticate = require('../middlewares/auth.middleware')

router.post('/',  bookController.addBook)
router.get('/:id', bookController.fetchBook)
router.patch('/:id', bookController.editBook)
router.get('/', authenticate, bookController.fetchBooks)
router.delete('/:id', bookController.deleteBook)

module.exports = router