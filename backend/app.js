// Setting up the backend
const express = require('express');
// init express
const app = express()
const router = require('./routes/account.js');

app.use('/',router); //Mount the router to the link

// Create a port to listen to
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is listening on Port ${PORT}`);
});