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
        
        let oficinasLinks = []
        oficinas.forEach(oficina => {
            const presencaLinks = oficina.aulas.map(aula => { return `http://${req.headers.host}/api/chamada?codigoPresenca=${aula.codigoPresenca}` })

            oficinasLinks.push({
                nome: oficina.nome,
                presencaLinks
            })
        })

        return res.status(200).json(oficinasLinks)
    }

    return res.status(401).json({ mensagem: 'Você não tem autorização' })
}))

export default handler
