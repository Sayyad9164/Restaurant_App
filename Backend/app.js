import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from './routes/reservationRoute.js'

const app = express();
dotenv.config({path: "./config/config.env"});

app.use(cors({
    // origin - frontend ka path jiske sath backend connect hai
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials: true,
}));

// json - string ko object me convert karna 
app.use(express.json());
// urlencoded - data kis type ka hai
app.use(express.urlencoded({extended: true}));
app.use('/api/v1/reservation',reservationRouter);

dbConnection();

app.use(errorMiddleware);

export default app;