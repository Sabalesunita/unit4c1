const mongoose = require('mongoose');

const publicationSchema =new mongoose.Schema({

// Publication Model ( Publication is the company which releases the book )

name :{type: String,required:true},
timestamps :{type :String, required:true}

})

module.exports =mongoose.model("publication",publicationSchema);