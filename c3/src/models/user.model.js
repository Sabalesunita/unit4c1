//User Model

const mongoose =require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : {type :String, required: true, minlength:3 ,maxlength:30},
    lastName: {type :String},
    age :{type:integer, required: true},
    email : {type:string, required:true, unique:true},
    profileImages: {type :String},
    timestamps: {type:String, required:true},

})


module.exports =mongoose.model("user",userSchema);