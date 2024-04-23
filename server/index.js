import { createRequire } from "module";
const require = createRequire(import.meta.url);


require("dotenv").config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.js";

const morgan =require("morgan");

const app = express();

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true , useUnifiedTopology: true,'useCreateIndex': true})
        .then(()=> console.log("DB connected"))
        .catch((err)=> console.log("DB CONNECTION ERROR: " ,err));


//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors());
app.use(morgan("dev"));

//route middlewares
app.use("/api",authRoutes);

app.listen(8001, ()=> console.log("Server running on port 8001"))