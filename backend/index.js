const express = require("express");
const dotenv = require("dotenv")
const app = express();
const mongoose = require("mongoose");
const port = 5000;

mongoose.set('strictQuery', true);
dotenv.config();
mongoose.connect(process.env.MONGO_URL,{
    dbName: "JobFinder",
}).then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log(err);
});

app.use(express.json());

app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening to port ${process.env.PORT}`);
});