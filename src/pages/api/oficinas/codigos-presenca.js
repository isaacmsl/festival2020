import nextConnect from 'next-connect'
import dbMiddleware from '../../../middlewares/database'
import { isAuthenticated } from '../../../middlewares/isAuthenticated'
import { ObjectID } from 'mongodb'

const handler = nextConnect()

const COLLECTION_OFICINAS = 'oficinas'
const COLLECTION_PARTICIPANTES = 'participantes'

handler.use(dbMiddleware)

handler.get(isAuthenticated(async (req, res) => {

    const participante = await req.db.collection(COLLECTION_PARTICIPANTES).findOne({ "_id": ObjectID(req.participante.id) })

    if (participante && participante.autorizacao === 3) {
        const oficinas = await req.db.collection(COLLECTION_OFICINAS).find({}).toArray()
        
        let oficinaCodigos = []
        oficinas.forEach(oficina => {
            const codigo = oficina.aulas.map(aula => { return aula.codigoPresenca })

            oficinaCodigos.push({
                nome: oficina.nome,
                codigo
            })
        })

        return res.status(200).json(oficinaCodigos)
    }

    return res.status(401).json({ mensagem: 'Você não tem autorização' })
}))

export default handler
