
//importing
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/dbconnection.js';
import authroutes from './routes/Authroutes/auth.js';
import cookieParser from 'cookie-parser';


dotenv.config();



const app = express();

app.use(cors())
app.use(express.json());  
app.use(cookieParser());




//PORT
const PORT = process.env.PORT ;




//routes
app.use("/api/auth", authroutes);//auth routes


// Database connection and server starting
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
    console.log("Connected to the database");
  });
});



// Error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Internal Server Error";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});