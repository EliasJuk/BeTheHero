const express = require("express")
const crypto = require('crypto')
const connection = require('./database/connection')

const routes = express.Router()


//ROUTES
    //MAIN
    routes.get("/", (request, response) => {           
        response.send("HI")
    })
    //USERS
    routes.get('/ongs', async (request, response) => {
        const ongs = await connection('ongs').select('*')

        return response.json(ongs)
    })

    routes.post("/ongs", async (request, response) => {  
        //REQUEST
            const {name, email, whatsapp, city, uf} = request.body //DESESTRUTURAÇAO  

        //CONEXÃO COM DATABASE
            const id = crypto.randomBytes(4).toString('HEX') //ID RANDOM            
            await connection('ongs').insert({ id, name, email, whatsapp, city, uf })
            
        return response.json({ id })
    })



module.exports = routes