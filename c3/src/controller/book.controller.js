const express =require("express");

const Book =require('..models/book.model')

const router = express.Router();

router.post('', async(req,res) => {

    const user = await Book.create(req.body)
     return res.status(200).send(book);
})
module.exports= router;