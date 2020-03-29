const connection = require('../database/connection')
const generateUniqueId = require('../../src/utils/generateUniqueId')

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*')
        
        return response.json(ongs)
    },

    async create( request, response) {
        //REQUEST
            const {name, email, whatsapp, city, uf} = request.body //DESESTRUTURAÇAO  

        //CONEXÃO COM DATABASE
            const id = generateUniqueId()           
            await connection('ongs').insert({ id, name, email, whatsapp, city, uf })
        
        //RETURN
        return response.json({ id })
    }
}