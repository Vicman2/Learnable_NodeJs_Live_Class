
const bookModel = require('../models/book.model')

class BookService{

    // Add book
    async addBook(data){
        return await bookModel.create(data)
    }

    // Update a book 
    async updateBook(id, updateData){
        return await bookModel.findByIdAndUpdate(id, updateData, {
            new: true
        })
    }

    // Delete a book 
    async deleteBook(id){
        return await bookModel.findByIdAndDelete(id)
    }

    // Get a single book
    async getBook(filter){
        return await bookModel.findOne(filter)
    }

    // Get all books 
    async getBooks (filter){
        return await bookModel.find(filter)
    }
}

module.exports = new BookService()