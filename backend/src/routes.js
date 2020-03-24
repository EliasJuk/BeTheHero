const express = require("express")
const OngController = require('./controllers/OngController')
const routes = express.Router()

//ROUTES
    //MAIN
    routes.get("/", (request, response) => {           
        response.send("HI")
    })
    //USERS    
    routes.get('/ongs', OngController.index)
    routes.post('/ongs', OngController.create)


module.exports = routes