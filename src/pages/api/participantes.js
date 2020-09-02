import nextConnect from 'next-connect'
import dbMiddleware from '../../middlewares/database'
import { ObjectID } from 'mongodb'
import { hash } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { authenticated } from './authenticated'

const handler = nextConnect()

const COLLECTION_NAME = 'participantes'

handler.use(dbMiddleware)

handler.get(authenticated(async (req, res) => {
    const participantes = await req.db.collection(COLLECTION_NAME).find({}).toArray()
    
    // para cada participante, remova a key "senha"
    participantes.forEach(participante => {
        delete participante.senha
    })

    res.json(participantes)
}))

handler.post(async (req, res) => {
    const { 
        nome,
        email,
        senha,
        instrumento
    } = req.body

    hash(senha, 10, async (error, senhaEncriptada) => {

        const newDocument = {
            nome,
            email,
            senha: senhaEncriptada,
            instrumento
        }

        const response = await req.db.collection(COLLECTION_NAME).insertOne(newDocument)
        
        const participante = response.ops[0]

        if (response.insertedCount) {  
            const conteudo = {
                nome: participante.nome,
                instrumento: participante.instrumento, 
                email: participante.email
            }
            const jwt = sign(conteudo, process.env.SIGN, { expiresIn: '1h' })

            return res.status(200).json({
                authToken: jwt,
                id: participante.id
            })
        }

        return res.status(500).json({ mensagem: 'Desculpa, algo inesperado aconteceu. Por favor, cheque os dados enviados' })
    })  
})

handler.put(authenticated(async (req, res) => {
    const { id, nome, instrumento, email } = req.body

    try {
        const response = await req.db.collection(COLLECTION_NAME).updateOne(
            { "_id": ObjectID(id) },
            {
                $set: {
                    nome,
                    email,
                    instrumento
                }
            }
        )

        if (response.modifiedCount) {
            return res.status(200).json({ mensagem: 'Documento atualizado com sucesso' })
        }

        return res.status(404).json({ mensagem: 'Documento não foi encontrado. Por favor cheque os dados enviados' })

    } catch (e) {
        return res.status(500).json({ mensagem: 'Desculpa, algo inesperado aconteceu. Por favor, cheque os dados enviados' })
    }

}))

handler.delete(authenticated(async (req, res) => {
    const { id } = req.body

    const response = await req.db.collection(COLLECTION_NAME).deleteOne({ "_id": ObjectID(id) })

    if (response.deletedCount) {
        return res.status(200).json({ mensagem: 'Documento deletado com sucesso' })
    }

    return res.status(500).json({ mensagem: 'Desculpa, algo inesperado aconteceu. Por favor, cheque os dados enviados' })
}))

export default handler
