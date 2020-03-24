const express = require("express")
const app = express()

app.use(express.json())

/*
*   Método HTTP:
*
*   GET: buscar uma informação do back-end
*   POST: Cria uma informação no back-end
*   PUT: Alterar uma informação no backend
*   DELETE: Deletar uma informação no backend
*/

/**
 *  Tipo de parãmetros
 *  
 *  Query Params: Parãmetros nomeados na rota após "?" (filtros, paginação) => req.query
 *  Route Params: Parãmetros utilizados para identificar recursos => req.params
 *  Request Body: Corpo da requisição, utilizada para criar ou alterar recursos => req.body
 */

//ROUTES
    //MAIN
        app.get("/", (req, res) => {           
            return res.json({ 
                evento: 'Semana OmniStack 11.0',
                aluno: 'Elias Juk',
            })
        })
    //USERS
        app.post("/users", (req, res) => {
            const body = req.body
            console.log(body)

            return res.json({
                evento: 'Semana OmniStack 11.0',
                aluno: 'Elias Juk'
            })
        })
    
//CONFIG
    //SERVER
        app.listen(3333)