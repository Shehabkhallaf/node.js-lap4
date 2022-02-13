const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const todosRoutes = require('./routes/todos')
const usersRoutes = require('./routes/users')
mongoose.connect('mongodb://localhost:27017/day3_node');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/todos', todosRoutes)
app.use('/users', usersRoutes)

app.use('*', (req,res,next)=>{
res.status(404).json({error : "not found"})
})

app.use((err, req ,res ,next)=>{
    res.json(err)
})

app.listen(3001, () => {
    console.log('app is up and running on :localhost:3001')
})