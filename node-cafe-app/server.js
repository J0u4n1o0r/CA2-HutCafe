/*
* This file sets up a Web Server and creates an Entry Point for the HUT Cafe Application
*author: @celsoM 
Code Reference: https://github.com/expressjs/body-parser
*/

// import express and body parser
const express = require('express');
const bodyParser = require('body-parser');

// creating express app
const app = express();

// Express app uses body-parser to handle requests for url encoded format
app.use(bodyParser.urlencoded({ extended: true }))

// parsing requests of type JSON
app.use(bodyParser.json())

// defining a route with middleware
app.get('/', (req, res) => {
    res.json({"message": "Welcome to HUT Cafe."});
});

// application listening to port 1234
app.listen(1234, () => {
    console.log("Server is listening on port 1234");
});