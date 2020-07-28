const express = require('express')
const nunjucks = require('nunjucks')
const videos = require("./data")

const server = express()

server.use(express.static('public')) // arquivo css

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false
})

server.get("/", function(req, res){

    const about = {
        avatar_url: "https://avatars2.githubusercontent.com/u/60264180?s=400&u=03c77a61074f43b7a2c2df26913da50da89f2875&v=4",
        name: "Mailson Ferreira",
        role: "Aluno - Rocketseat",
        description: 'Cursando o bootcamp LaunchBase com Mayk Brito da <a href="https://rocketseat.com.br/" target="_blank">  Rocketseat ',
        links: [
            {name: "Github", url: "https://github.com/mailsonferreira"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/mailson-ferreira/"},
            {name: "Instagram", url: "https://www.instagram.com/mailsonferreira/"}
        ]
    }

    return res.render("about", { about})
})

server.get("/portfolio", function(req, res){

    return res.render("portfolio", {items: videos})
})


server.listen(5000, function(){
    console.log('SERVER RODANDO')
})