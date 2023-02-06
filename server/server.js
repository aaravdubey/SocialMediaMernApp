import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";      //a Connect/Express middleware that can be used to enable CORS with various options.
import multer from "multer";  //a node.js middleware for handling multipart/form-data, primarily used for uploading files. It is written on top of busboy for maximum efficiency
import helmet,{ crossOriginResourcePolicy } from "helmet";  //a Connect/Express middleware used for setting various HTTP headers. The helmet() is a wrapper around 15 middlewares (crossOriginResourcePolicy is one of them)
import morgan from "morgan"   //a node.js HTTP request logger middleware

import { createPost } from "./controllers/posts.js";
import register from "./controllers/auth.js";

/* One-Time */
// import { users, posts } from "./data/index.js";
// import User from "./models/User.js";
// import Post from "./models/Post.js";

/* ROUTE IMPORTS */
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import { verifyToken } from "./middlewares/auth.js";

/* CONFIGURATIONS */
dotenv.config();              //load .env file contents into process.env
const app = express();
app.use(express.json)         //used to parse incoming requests with json payloads (based on body-parser)
app.use(helmet(crossOriginResourcePolicy( {policy: "cross-origin"} )));
app.use(morgan("common"))     //common is the format of log output, a function can be passed instead to produce log entry
app.use(bodyParser.json({limit: "30mb"}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))    //This object req.body will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).
app.use(cors())               //invokes CORS policy
app.use(express.static("public"))

/* FILE STORAGE */
const upload = multer({dest: "public/assets"})

/* ROUTES */
app.post("/auth/register", upload.single('picture'), register);
app.post("/posts", upload.single("picture"), verifyToken, createPost);

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

/* MONGOOSE SETUP */
const PORT = 3000 || 6000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(
    ()=>{
        app.listen(PORT, ()=>{ console.log("Server started on " + PORT); })
        /* One-time */
        // User.insertMany(users);
        // Post.insertMany(posts);
    },
    (error)=>{
        console.log(error);
    }
)
