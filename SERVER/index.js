require("dotenv").config();
const express = require ("express");
const morgan= require("morgan");
const App = express();
const db = require("./db");

// Middleware
// App.use(morgan("dev"));

// App.use((req,res,next)=>{
//     next();
//     res.status(200).json({
//         status:200
//     })
//     console.log(`Middleware is active`);
// })

App.use(express.json());


// Routes
App.get("/api/v1/restaurants", async(req,res)=>{
    // res.status(200).json({
    //     status:"success",
    //     data:{
    //         restaurant:["MacDonalds", "Wendy"],
    //     }
    // });

    try {
        const result = await db.query("SELECT * FROM  restaurants");
        res.status(200).json({
            status:"success",
            result:result.rows.length,
            data:{
                restaurants:result.rows, 
            }
        });
        console.log(result);
       } catch (error) {
        console.log(error);
       }

  
});


App.get("/api/v1/restaurants/:id",async(req,res)=>{
    console.log(req.params);

    try {
        // const id = req.params.id;
      
        // Use parameterized query to avoid SQL injection
        const result = await db.query('SELECT * FROM $2 WHERE id = $1', 
        [req.params.id,"name"]);
      
        if (result.rows.length === 0) {
          return res.status(404).json({
            status: 'error',
            message: 'Restaurant not found',
          });
        }
      
        res.status(200).json({
          status: 'success',
          data: {
            restaurant: result.rows[0],
          },
        });
      
        console.log(result.rows);
      } catch (error) {
        console.error(error);
      }

    // res.status(200).json({
    //     status:"success",
    //     data:{
    //         restaurant:"Taco Bells",
    //     }
    // });
});

App.post("/api/v1/restaurants",(req,res)=>{
    console.log(req.body);
});

//Update
App.put("/api/v1/restaurants/:id",(req,res)=>{
    console.log(req.params);
    console.log(req.body);

    res.status(200).json({
        status:"success",
        data:{
            restaurant:"Taco Bells",
        }
    });
});

App.delete("/api/v1/restaurants/:id",(req,res)=>{
    console.log(`success`);
    res.status(200).json({
        status:"success",
    })
})

const port = process.env.PORT || 5002;
App.listen(port,()=>{
    console.log(`Server is connected at port ${port}`);
});