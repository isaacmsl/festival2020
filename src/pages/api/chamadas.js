import nextConnect from 'next-connect'
import dbMiddleware from '../../middlewares/database'
import { ObjectID } from 'mongodb'
import { authenticated } from './authenticated'

const handler = nextConnect()

const COLLECTION_NAME = 'participantes'

handler.use(dbMiddleware)

handler.put(async (req, res) => {
    const { oficina, idParticipantes } = req.body
 
    idParticipantes.forEach(async idParticipante => { 
        let participante = await req.db.collection(COLLECTION_NAME).findOne({ "_id": ObjectID(idParticipante) })
        let newPresencaOficinas
        if(!participante.hasOwnProperty('presencaOficinas')) {
            newPresencaOficinas = new Map();
            newPresencaOficinas.set(oficina, 1)
            console.log("não tinha o campo")
        } else {
            newPresencaOficinas = participante.presencaOficinas
            if(newPresencaOficinas[oficina]) {
                newPresencaOficinas[oficina]++
            } else {
                newPresencaOficinas[oficina] = 1
            }
            console.log("tinha campo")
        }

        await req.db.collection(COLLECTION_NAME).findOneAndUpdate(
            { "_id" : ObjectID(idParticipante) },
            { $set: { presencaOficinas: newPresencaOficinas } }
        )
        
        console.log("cabo")

        return
    })
    
    return
})

export default handler