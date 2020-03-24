const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*')
        
        return response.json(ongs)
    },

    async create( request, response) {
        //REQUEST
            const {name, email, whatsapp, city, uf} = request.body //DESESTRUTURAÇAO  

        //CONEXÃO COM DATABASE
            const id = crypto.randomBytes(4).toString('HEX') //ID RANDOM            
            await connection('ongs').insert({ id, name, email, whatsapp, city, uf })
        
        //RETURN
        return response.json({ id })
    }
}