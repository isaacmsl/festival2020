import nextConnect from 'next-connect'
import dbMiddleware from '../../middlewares/database'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

const handler = nextConnect()

const COLLECTION_NAME = 'participantes'

handler.use(dbMiddleware)

handler.post(async (req, res) => {
    const {
        email,
        senha
    } = req.body

    const participante = await req.db.collection(COLLECTION_NAME).findOne({ email })
    
    if (participante) {
        compare(senha, participante.senha, (error, result) => {
            if(!error && result) {
                const conteudo = {
                    nome: participante.nome,
                    instrumento: participante.instrumento,
                    email: participante.email
                }
                const jwt = sign(conteudo, process.env.SIGN, { expiresIn: '1h' })

                return res.status(200).json({ authToken: jwt })
            }

            return res.status(401).json({ mensagem: 'Não logou' })
        })  
    } else {
        return res.status(401).json({ mensagem: 'Não logou' })
    }
    
})

export default handler