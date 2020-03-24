const express = require("express")
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')


const routes = express.Router()

//ROUTES
    //MAIN
    routes.get("/", (request, response) => {           
        response.send("Hello, World!")
    })
    //USERS    
    routes.get('/ongs', OngController.index)
    routes.post('/ongs', OngController.create)

    //INCIDENTS
    routes.get('/incidents', IncidentController.index)
    routes.post('/incidents', IncidentController.create)
    //DELETE
    routes.delete('/incidents/:id', IncidentController.delete)



module.exports = routes