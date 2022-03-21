const express =require("express");

const connect =require("./configs/db");

const app=express();

app.use(express.json());

const userController = require('./controller/user.controller');
const bookController = require('./controller/book.controller');
const punlicationController = require('./controller/publication.controller');
const commentController = require('./controller/comment.controller');

app.use("/user",userController);
app.use("/book",bookController);
app.use("/publication",punlicationController);
app.use("/comment",commentController);

app.listen(5000,async() => {
try{
    await connect ()
     console.log("listening to port 5000");

}catch(err){
console.log(err);

}

});