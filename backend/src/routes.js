const express = require("express")
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

//ROUTES
    //MAIN 
    routes.get("/", (request, response) => {           
        response.send("Hello, World!")
    })

    //SESSIONS
    routes.post('/sessions', SessionController.create)

    //USERS    
    routes.get('/ongs', OngController.index)
    routes.post('/ongs', OngController.create)

    //LIST
    routes.get('/profile', ProfileController.index)

    //INCIDENTS
    routes.get('/incidents', IncidentController.index)
    routes.post('/incidents', IncidentController.create)
    //DELETE
    routes.delete('/incidents/:id', IncidentController.delete)
    

module.exports = routes