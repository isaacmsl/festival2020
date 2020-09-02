import nextConnect from 'next-connect'
import dbMiddleware from '../../middlewares/database'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import cookie from 'cookie'

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
                    nomeCompleto: participante.nomeCompleto,
                    email: participante.email,
                    oficinas: participante.oficinas,
                    endereco: participante.endereco,
                    contatoTelefonico: participante.contatoTelefonico,
                    tipoMusico: participante.tipoMusico,
                    tempoAtuacao: participante.tempoAtuacao,
                    banda: participante.banda,
                    autorizacao: participante.autorizacao,
                    id: participante._id
                }
                const jwt = sign(conteudo, process.env.SIGN, { expiresIn: '1h' })

                res.setHeader('Set-Cookie', cookie.serialize('authorization', jwt, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development',
                    sameSite: 'strict',
                    maxAge: 3600,
                    path: '/'
                }))

                return res.status(200).json({ mensagem: 'Logado com sucesso!'})
            }

            return res.status(401).json({ mensagem: 'Não logou' })
        })  
    } else {
        return res.status(401).json({ mensagem: 'Não logou' })
    }
    
})

export default handler