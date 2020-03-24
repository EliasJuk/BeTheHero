const express = require("express")
const app = express()

//ROUTES
    app.get("/", (req, res) => {
        return res.json({ 
            evento: 'Semana OmniStack 11.0',
            aluno: 'Elias Juk'
        })
    })
    
//CONFIG
    //SERVER
        app.listen(3333)