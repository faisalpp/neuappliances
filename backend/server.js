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
  origin: ["http://localhost:3000"],
};

const app = express();

app.use(cookieParser())
app.use(express.json())

app.use(cors(corsOptions));
app.use(router);
dbconnect();

app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server Started on port: ${PORT}`)
});
