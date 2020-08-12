"use strict"
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const port = 3000;
let cart = require('./cart');

app.use('/cart-items', cart);
app.use(express.json());

app.listen(port,()=> {console.log(`Listening on port ${port}`)});