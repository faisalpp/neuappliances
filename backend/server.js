const express = require('express');
const cors = require('cors');
const router = require('./routes/index')
const mongoose = require('mongoose');
const {PORT} = require('./config/index')
const errorHandler = require('./middleware/errorHandler')
const dbconnect = require('./databse/index')
const cookieParser = require('cookie-parser')

const corsOptions = {
  credentials: true,
  origin: ["http://localhost:3000","http://localhost:5000","https://neuappliances.vercel.app"],
};

const app = express();

app.use(cookieParser())
app.use(express.json())
// Increase payload size limit for JSON requests
app.use(express.json({ limit: '10mb' }));

// Increase payload size limit for URL-encoded requests
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cors(corsOptions));
app.use(router);
dbconnect();
app.use("/storage", express.static("storage"));
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server Started on port: ${PORT}`)
});
