const bookService = require('../services/book.service')


class BookController{

    async addBook(req, res){
        const body = req.body

        // Check if a book of that title already exist
        // If not create the book
        const existingBook = await bookService.getBook({title: body.title.toLowerCase()})
        if(existingBook) return res.status(403).json({
            success: false,
            message: 'Book already exist'
        })


        const createdBook = await bookService.addBook(body)


        return res.status(201).json({
            success: true,
            message: 'Book Created Successfully',
            data: createdBook
        })
    }

    async editBook(req, res){
        const updateData = req.body
        const bookId = req.params.id

        // Fetch the book with the id
        const existingBook = await bookService.getBook({_id: bookId})
        if(!existingBook) return res.status(404).json({
            success: false,
            message: 'Book not found'
        })

        // Fetching existing book title
        if(updateData.title){
            const existingBookTitle  = await bookService.getBook({title: updateData.title.toLowerCase()})
            if(existingBookTitle){
                if(existingBookTitle._id.toString() !== bookId){
                    return res.status(403).json({
                        success: false,
                        message: 'Book with that title already exist'
                    })
                }
            }
        }

        const updatedBook = await bookService.updateBook(bookId, updateData)

        return res.status(200).json({
            success: true,
            message: 'Book Updated Successfully',
            data: updatedBook
        })
    }

    async fetchBooks(req, res){
        console.log('I am now done with authentication')
        const allBooks = await  bookService.getBooks();

        return res.status(200).json({
            success: true,
            message: 'Books Fetched Successfully',
            data: allBooks
        })

    }

    async fetchBook(req, res){
        const bookId = req.params.id
        const bookToFetch = await  bookService.getBook({_id: bookId});

        if(!bookToFetch) return res.status(404).json({
            success: false,
            message: 'Book not found'
        })

        return res.status(200).json({
            success: true,
            message: 'Book Fetched Successfully',
            data: bookToFetch
        })

    }


    async deleteBook(req, res){
        const bookId = req.params.id
        const bookToFetch = await  bookService.getBook({_id: bookId});

        if(!bookToFetch) return res.status(404).json({
            success: false,
            message: 'Book not found'
        })

        await bookService.deleteBook(bookId)

        return res.status(200).json({
            success: true,
            message: 'Book Deleted Successfully',
            data: bookToFetch
        })

    }
}

module.exports = new BookController()