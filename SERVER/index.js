require("dotenv").config();
const express = require ("express");
const App = express();


const port = process.env.PORT || 5002;
App.listen(port,()=>{
    console.log(`Server is connected at port ${port}`);
});