const express = require("express")
const { celebrate, Segments, Joi } = require('celebrate')

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
        //VALIDAÇÃO ONGS-POST
            routes.post('/ongs', celebrate({
                [Segments.BODY]: Joi.object().keys({
                    name: Joi.string().required(),
                    email: Joi.string().required().email(),
                    whatsapp: Joi.string().required().min(10).max(15),
                    city: Joi.string().required(),
                    uf: Joi.string().required().length(2)
                })
            }), OngController.create)

    //LISTS
        //VALIDAÇÃO PROFILE-GET
            routes.get('/profile', celebrate({
                [Segments.HEADERS]: Joi.object({
                    authorization: Joi.string().required(),
                }).unknown(),
            }), ProfileController.index)

    //INCIDENTS
        //VALIDAÇÃO INCIDENTS-GET
            routes.get('/incidents', celebrate({
                [Segments.QUERY]: Joi.object().keys({
                    page: Joi.number(),
                })
            }), IncidentController.index)            
        //VALIDAÇÃO INCIDENTS-CREATE
            routes.post('/incidents', IncidentController.create)
        //VALIDAÇÃO INCIDENTS-DELETE
            routes.delete('/incidents/:id', celebrate({
                [Segments.PARAMS]: Joi.object().keys({
                    id: Joi.number().required(),
                })
            }), IncidentController.delete)
    

module.exports = routes