// Book Model

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    likes :{type :integer, default:0},
    coverImage:{type:String, required:true,maxlength:1},
    content :{type:String, required:true},
    timestamps :{type:String, required:true}

})

module.exports =mongoose.model("book",bookSchema);