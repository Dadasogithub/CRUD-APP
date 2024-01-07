import express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;
const  uri = process.env.MONGO_URL;

mongoose.connect(uri).then(()=>{

    console.log("mongodb connected successfully");
    app.listen(PORT,() =>{
        console.log(`server is running on port: ${ PORT}`);
    })
})

app.use("/api", route);