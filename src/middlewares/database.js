import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect'

const client = new MongoClient('mongodb+srv://isaacmsl:mDpCkpq84ZNOZEIh@cluster0.jvsfy.gcp.mongodb.net/festival2020?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

async function database(req, res, next) {
    if (!client.isConnected()) await client.connect()
    req.dbClient = client
    req.db = client.db('festival2020')
    return next()
}

const middleware = nextConnect()

middleware.use(database)

export default middleware