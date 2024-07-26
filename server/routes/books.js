const express = require('express');
const Book = require ('../models/Book');

const router = express.Router();

// GET all books
router.get('/', async(req,res) => {
const books = await Book.find();
res.json(books);
});

// GET a single book
router.get('/:id', async(req,res) =>
{
    const book = await Book.findById(req.params.id);
    express.res.json(book);
});
router.post('/', async(req,res) => {
    const newBook = new Book(req.body);
    await newBook.save();
    res.json(newBook);
});
router.put('/', async(req,res) =>
{
    const updatedBook = await Book.findById(req.params.id, req.body, {new: true});
    res.json(updatedBook);
});

router.delete('/', async(req,res) => {
    await Book.findByIdAndRemove(req.params.id);
    res.json({message: 'Book deleted successfully'});
});

module.exports = router;