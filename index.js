const express =require("express");
 const app= express();

 app.use(logger);
 app.use(checkPermission);


 app.get("/books",(req,res) =>{
     return res.send({ route: "/books"})
 });

 app.get("/libraries",(req,res) =>{
    return res.send({ route: "/libraries",permission:true})
});

app.get("/authors",(req,res) =>{
    return res.send({ route: "/authors",permission:true})
});

function logger(req,res,next)
{
   console.log("books");
   next(); 
        
}

function checkPermission(req,res,next){
    
   if(req.path == "/libraries")
   {
       permission == true;
   }
   else if(req.path="/authors")
   {
       permission == true;
   }
   else{
       console.log("not allowed");
       next();
   }
   
}

app.listen(5000,() =>{
    console.log("listening on  port 5000");
});