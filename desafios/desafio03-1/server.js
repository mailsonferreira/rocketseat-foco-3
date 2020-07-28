const express = require('express')
const server = express()

server.get("/", function(req, res){
    return res.send('Hello, oi oi')
})

server.listen(3000, function(){
    console.log('SERVER RODANDO')
})