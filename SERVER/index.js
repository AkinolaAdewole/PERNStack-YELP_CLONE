require("dotenv").config();
const express = require ("express");
const App = express();


const port = 5000;
App.listen(port,()=>{
    console.log(`Server is connected at port ${port}`);
});