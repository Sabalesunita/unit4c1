
// module.exports = app;

const express = require("express");

const connect = require("./configs/db");

const userController = require("./controllers/user.controllers");

const todosController = require("./controllers/todo.controllers");

const {register,login} = require("./controllers/auth.controllers")

const app = express();

app.use(express.json());

app.get("/todos", todosController);

app.use("/users", userController)

app.post("/register", register)

app.post("/login", login)

app.use("/todos", todosController)



app.listen(5000, async () => {
    try{
        await connect();
        console.log("listening on port 5000")
    }
    catch(err){
        console.log(err.message);
    }
});