import nextConnect from 'next-connect'
import dbMiddleware from '../../middlewares/database'

const handler = nextConnect()

const COLLECTION_NAME = 'participantes'

handler.use(dbMiddleware)

handler.get(async (req, res) => {
    const oficinas = await req.db.collection(COLLECTION_NAME).aggregate([
        {
            '$unwind': '$oficinas'
        },
        {
            '$group': {
                '_id': {
                    '__alias_0': '$oficinas'
                },
                '__alias_1': {
                    '$sum': 1
                }
            }
        },
        {
            '$project': {
                '_id': 0,
                '__alias_0': '$_id.__alias_0',
                '__alias_1': 1
            }
        },
        {
            '$project': {
                'oficina': '$__alias_0',
                'participantes': '$__alias_1',
                '_id': 0
            }
        },
        {
            '$addFields': {
                '__agg_sum': {
                    '$sum': [
                        '$value'
                    ]
                }
            }
        },
        {
            '$sort': {
                '__agg_sum': -1
            }
        },
        {
            '$project': {
                '__agg_sum': 0
            }
        },
        {
            '$limit': 10
        }
    ]).toArray()
    
    return res.status(200).json(oficinas)   
})

export default handler