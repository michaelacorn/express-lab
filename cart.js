const express = require('express');
const { request } = require('express');
const cart = express.Router();

let myCart = [
    {id: 1, product:'Overwatch', price: 19.99, quantity: 5, platform: 'PC'},
    {id: 2, product:'Call of Duty: Warzone', price: 39.99, quantity: 15, platform: 'XBox'},
    {id: 3, product:'Ghosts of Tsushima', price: 59.99, quantity: 20, platform: 'PS4'},
    {id: 4, product:'Sonic Mania', price: 9.99, quantity: 2, platform: 'Nintendo Switch'}
]

cart.get('/', (req, res) => {
    res.json(myCart)
    res.status(200);
})

cart.get('/:id', (req, res) =>{
    let item = myCart.find((current)=>{
        if (current.id === parseInt(req.params.id)){;
        return current;
    }
    })
    res.json(item);
    res.status(200);
})
cart.get('/', (req, res) => {
    let cart = [...myCart];
    if (req.query.maxPrice) {
        filtered = cart.filter(item => item.price <= req.query.maxPrice)
    };
       res.json(filtered);
    res.sendStatus(200); 
    
     
    });

cart.post('/',(req,res)=>{
    let item ={
        id: myCart.length + 1,
        product: req.body.product,
        price: req.body.price,
        quantity: req.body.quantity,
        platform: req.body.platform
    
    };
    myCart.push(item);
    res.json(item);
    res.status(201);
})

cart.put('/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const item = req.body;
    item.id = id;
    // Find Index by ID
    const index = myCart.findIndex(item => item.id === id);
    // Replace at index
    myCart.splice(index, 1, item);
    res.json(item);
})

cart.delete('/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    const index = myCart.findIndex(item => item.id === id);
    myCart.splice(index, 1);
    // Set response code to 204. Send no content.
    res.sendStatus(204);
    
});
   
module.exports = cart;