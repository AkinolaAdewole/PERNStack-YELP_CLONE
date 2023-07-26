require("dotenv").config();
const express = require ("express");
const App = express();


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