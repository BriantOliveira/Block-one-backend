/**********************************
*        Backend Server for
*   Block One Interview Challenge
**********************************/
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');


// Initializing express app
const app = express();

const PORT = process.env.PORT || 3000;

/****************************
* Middleware
*****************************/
app.use(express.static(__dirname));
app.use(express.static('./public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT, () => {
    console.log('Block One Backend listening on port', PORT)
});
