import express from "express";
import cors from "cors";
import authRoutes from './auth.js'
import connectDB from "./db.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

app.use(express.json());


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))


connectDB(); 

app.use('/',authRoutes);


app.listen(7000,() => {
    console.log('App is listening on port 7000');
})