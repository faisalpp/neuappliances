const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user')

const app = express();

mongoose.connect('mongodb://localhost:27017/neuappliances');

app.use(express.json())

app.use(cors());

app.post('/api/register',async (req,res)=>{
    try{
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            country: req.body.country,
            password: req.body.password,
        })
    }catch(error){
        console.log(error);
    }
});
app.listen(5000,()=>{
    console.log('Server Started on port:5000')
});
