
//importing
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/dbconnection.js';


dotenv.config();



const app = express();

app.use(cors())


//PORT
const PORT = process.env.PORT || 8000;



// Database connection and server starting
connectDB().then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
      console.log("Connected to the database");
    });
  });




