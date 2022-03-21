const express = require ("express");

const Publication =require('..models/publication.model')

const router = express.Router();

router.post('', async(req,res) => {

    const user = await Publication.create(req.body)
     return res.status(200).send(publication);
})
module.exports= router;