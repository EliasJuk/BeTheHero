const express = require("express")
const cors = require('cors')
const routes = require('./routes')

const app = express()

//INITIALS CONFIG
    //CORS
        app.use(cors())
    //JSON  
        app.use(express.json())
    //ROUTES
        app.use(routes)

//CONFIG
    //SERVER
        app.listen(3333)