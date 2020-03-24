const express = require("express")
const routes = require('./routes')
const app = express()

//INITIALS CONFIG
    //JSON  
        app.use(express.json())
    //ROUTES
        app.use(routes)



//CONFIG
    //SERVER
        app.listen(3333)