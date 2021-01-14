const express = require('express')

const products = require('./products.json')
const PORT = 3000

const app = express()

app.get('/', function(req, res){
 res.send('hello world')
}) 

app.get('/products', function(req, res){
    const type = req.query.type
    if(type === undefined) {
        res.json({
            data: products
        })
    } else {
       const data = products.filter(function(product){
           return product.type === type
       }) 
       res.json({
           data: data
       })
    }
})

app.listen(PORT, function (){
console.log('Rodando servidor')

}) 
    

