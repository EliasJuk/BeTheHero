const express = require("express")

const routes = express.Router()


//ROUTES
    //MAIN
    routes.get("/", (req, res) => {           
        return res.json({ 
            evento: 'Semana OmniStack 11.0',
            aluno: 'Elias Juk',
        })
    })
//USERS
    routes.post("/users", (req, res) => {
        const body = req.body
        console.log(body)

        return res.json({
            evento: 'Semana OmniStack 11.0',
            aluno: 'Elias Juk'
        })
    })

module.exports = routes