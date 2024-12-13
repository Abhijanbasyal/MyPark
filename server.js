
//importing
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/dbconnection.js';
import authroutes from './routes/Authroutes/auth.js';
import cookieParser from 'cookie-parser';
import moviesRoutes from './routes/MoviesRoutes/moviesroutes.js';
import moviesDetailsRoutes from './routes/MoviesDetailsRoutes/moviesDetailsRoutes.js';
import categroryRoutes from './routes/CategoryRoutes/categoryRoutes.js';


const app = express();
dotenv.config();



app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}))




//PORT
const PORT = process.env.PORT;




//routes
app.use("/api/auth", authroutes);//auth routes
app.use("/api/movies", moviesRoutes);//auth routes
app.use("/api/moviesdetails", moviesDetailsRoutes);//auth routes
app.use("/api/category", categroryRoutes);//auth routes




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