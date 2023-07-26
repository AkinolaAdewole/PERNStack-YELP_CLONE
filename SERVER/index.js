require("dotenv").config();
const express = require ("express");
const morgan= require("morgan");
const App = express();


App.use((req,res,next)=>{
    next();
    res.status(200).json({
        status:200
    })
    console.log(`Middleware is active`);
})


App.get("/api/v1/restaurants",(req,res)=>{
    res.status(200).json({
        status:"success",
        data:{
            restaurant:["MacDonalds", "Wendy"],
        }
    });
});


App.get("/api/v1/restaurants/:id",(req,res)=>{
    console.log(req.params);
});

App.post("/api/v1/restaurants",(req,res)=>{
    console.log(req.params);
});

const port = process.env.PORT || 5002;
App.listen(port,()=>{
    console.log(`Server is connected at port ${port}`);
});