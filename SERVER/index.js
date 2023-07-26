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


App.get("/api/v1/restaurants/:id", async (req, res) => {
    console.log(req.params);
  
    // Use parameterized query to avoid SQL injection
    try {
      const id = req.params.id;
      // The dynamic column name you want to fetch
      const columnName = 'name'; 
  
      // Construct the SQL query with the column name directly
      const query = `SELECT ${columnName} FROM restaurants WHERE id = $1`;
  
      // Use parameterized query to avoid SQL injection
      const result = await db.query(query, [id]);
  
      if (result.rows.length === 0) {
        return res.status(404).json({
          status: 'error',
          message: 'Restaurant not found',
        });
      }
  
      // res.status(200).json({
    //     status:"success",
    //     data:{
    //         restaurant:"Taco Bells",
    //     }
    // });

      res.status(200).json({
        status: 'success',
        data: {
          restaurant: result.rows[0],
        },
      });
    } catch (error) {
      console.error(error);
    }
  });
  
          

    


App.post("/api/v1/restaurants", async(req,res)=>{
    try {
        const result = await db.query("INSERT INTO restaurants(name, location, price_range) values ($1, $2, $3) returning *",
         [req.body.name, req.body.location, req.body.price_range] )
         console.log(result);
         res.status(200).json({
            status:"success",
            data:{
                restaurant:result.rows[0],
            }
         })
    } catch (error) {
        console.error(error);
    }
    console.log(req.body);
});

//Update
App.put("/api/v1/restaurants/:id",async(req,res)=>{
    // UPDATE restaurants SET name = 'Mr Biggs', location = 'Oyo', price_range = 5 WHERE id=5;
    console.log(req.body);
    try {
        const result = await db.query("UPDATE restaurants SET name=$1, location=$2, price_range=$3 WHERE id=$4 returning *",
        [req.body.name, req.body.location, req.body.price_range, req.params.id])
        console.log(result);
        res.status(200).json({
            status:"success",
            data:{
                restaurant:result.rows[0],
            }
        });
    } catch (error) {
        console.error(error);
    }
});

App.delete("/api/v1/restaurants/:id", async(req,res)=>{
    // DELETE FROM restaurants WHERE id=7;
    try {
        const result= await db.query("DELETE FROM restaurants WHERE id=$1",[req.params.id])
        console.log(`success`);
        res.status(200).json({
            status:"success",
        })
    } catch (error) {
        console.error(error);
    }
   
});




const port = process.env.PORT || 5002;
App.listen(port,()=>{
    console.log(`Server is connected at port ${port}`);
});