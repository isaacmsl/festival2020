import nextConnect from 'next-connect'
import dbMiddleware from '../../middlewares/database'

import { isAuthenticated } from '../../middlewares/isAuthenticated'
import { ObjectID } from 'mongodb'

const handler = nextConnect()

const COLLECTION_PARTICIPANTES = 'participantes'
const COLLECTION_OFICINAS = 'oficinas'

handler.use(dbMiddleware)

handler.get(isAuthenticated(async (req, res) => {
    const { codigoPresenca } = req.query

    const oficina = await req.db.collection(COLLECTION_OFICINAS).findOne({ "aulas": { "$elemMatch": {codigoPresenca}} })
    if(!oficina) {
        return res.status(404).json({ mensagem: "Código não encontrado."})
    }
    const participante = await req.db.collection(COLLECTION_PARTICIPANTES).findOne({ "_id": ObjectID(req.participante.id)})

    const numeroAula = oficina.aulas.findIndex(aula => (aula.codigoPresenca === codigoPresenca)) + 1

    if(participante.oficinas.includes(oficina.nome)) {
        if(!participante.presencaOficinas) {
            participante.presencaOficinas = {}
        }
        if(!participante.presencaOficinas[oficina.nome]) {
            participante.presencaOficinas[oficina.nome] = []
        }

        if(participante.presencaOficinas[oficina.nome].includes(numeroAula)) {
            return res.status(401).json({ mensagem: "Você já possui essa presença"})
        }
        
        participante.presencaOficinas[oficina.nome].push(numeroAula)
        
        const newPresencaOficinas = participante.presencaOficinas

        const response = await req.db.collection(COLLECTION_PARTICIPANTES).updateOne(
            { "_id" : ObjectID(req.participante.id) },
            { $set: { presencaOficinas: newPresencaOficinas } }
        )

        if (response.modifiedCount) {
            return res.status(200).json({ mensagem: 'Presença contabilizada' })
        }

        return res.status(404).json({ mensagem: 'Documento não foi encontrado. Por favor cheque os dados enviados' })
    }

    return res.status(401).json({ mensagem: "Você não possui essa oficina"})
    

    
}))

export default handler