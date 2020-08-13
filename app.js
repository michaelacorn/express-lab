"use strict"
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const bodyParser = require('body-parser')
const port = 3000;
let cart = require('./cart');

// Call express.json() before setting up routes:
app.use(express.json());
app.use('/cart-items', cart);

app.listen(port,()=> {console.log(`Listening on port ${port}`)});