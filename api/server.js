const express = require('express');
const cors = require('cors');
const router = require('./routes/index')
const mongoose = require('mongoose');
const {PORT} = require('./config/index')
const errorHandler = require('./middleware/errorHandler')
const dbconnect = require('./databse/index')
const cookieParser = require('cookie-parser')
const path = require('path')
const app = express();

app.use(cookieParser())
// Increase payload size limit for JSON requests
app.use(express.json({ limit: '10mb' }));

// Increase payload size limit for URL-encoded requests
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json());

// app.use(cors({
//   credentials: true,
//   origin: ['http://localhost:3000','https://neuappliances.vercel.app'],
// }));

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       return callback(null, true);
//     },
//     optionsSuccessStatus: 200,
//     credentials: true,
//   })
// );
dbconnect();

app.use(router);

app.use('/storage', express.static(path.join(__dirname + '/storage')));

if(process.env.DEV === 'production'){
    app.use(express.static(path.resolve(__dirname,'../dist')));
    
app.get("/*", (req, res) => {
res.sendFile(path.resolve(__dirname, '../dist', 'index.html'),function (err) {
        if(err) {
            res.status(500).send(err)
        }
    });
})
}

app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server Started on port: ${PORT}`)
});

