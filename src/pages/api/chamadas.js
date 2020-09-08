import nextConnect from 'next-connect'
import dbMiddleware from '../../middlewares/database'
import { ObjectID } from 'mongodb'
import { authenticated } from './authenticated'

const handler = nextConnect()

const COLLECTION_NAME = 'participantes'

handler.use(dbMiddleware)

handler.put(async (req, res) => {
    const { oficina } = req.body
    
    const participantes = await req.db.collection(COLLECTION_NAME)
        .find({ 
            "oficinas": { $all: [oficina] } 
        }).toArray()

    
    return
})

export default handler