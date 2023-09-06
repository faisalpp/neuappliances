const express = require('express');
const cors = require('cors');
const router = require('./routes/index')
const {PORT} = require('./config/index')
const errorHandler = require('./middleware/errorHandler')
const dbconnect = require('./databse/index')
const cookieParser = require('cookie-parser')
const path = require('path')
const fs = require('fs')
const app = express();

const corsOptions = {
  credentials: true,
  origin: ["http://localhost:5173","https://neuoutletapp-03ffb1b9719f.herokuapp.com"],
};


app.use(cookieParser())
// Increase payload size limit for JSON requests
app.use(express.json({ limit: '10mb' }));

// Increase payload size limit for URL-encoded requests
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json());

app.use(cors(corsOptions))

app.use(router);


if(process.env.NODE_ENV === "production"){
  app.use('/storage', express.static(path.join(__dirname + '/storage')));
  app.use(express.static(path.join(__dirname,"client/build")))
  app.use("*", (req,res) => {
    console.log(req)
    res.sendFile(path.resolve(__dirname,'client','build','index.html'),function (err){res.status(500).send(err)});
  })
}

app.use(errorHandler);

dbconnect().then(()=>{
  app.listen(PORT,()=>{
      console.log(`Server Started on port: ${PORT}`)
  });
})

