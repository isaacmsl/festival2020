import nextConnect from 'next-connect'
import dbMiddleware from '../../middlewares/database'
import crypto from 'crypto'
import sendEmail from '../../libs/sendEmail'

const handler = nextConnect()

const codigosAtivos = new Map()

const COLLECTION_NAME = 'participantes'

handler.use(dbMiddleware)

handler.post(async (req, res) => {
    const {
        email,
        codigoRecuperacao
    } = req.body

    const codigoAtivoEmail = codigosAtivos.get(email)

    if (codigoAtivoEmail && codigoRecuperacao && codigoRecuperacao.length > 0) {
        if (codigoAtivoEmail === codigoRecuperacao) {
            const response = await req.db.collection(COLLECTION_NAME).findOne({ email })

            codigosAtivos.delete(email)
            return res.status(200).json({
                mensagem: 'Código de recuperação aceito.',
                idParticipante: response._id
            })
        } 

        return res.status(406).json({ mensagem: 'Não foi possível validar o código de recuperação.' })
    } else {
        const participante = await req.db.collection(COLLECTION_NAME).findOne({ email })

        if (participante) {
            const novoCodigo = crypto.randomBytes(4).toString('HEX')

            try {
                await sendEmail(email, {
                    codigoRecuperacao: novoCodigo
                })

                codigosAtivos.set(email, novoCodigo)

                return res.status(200).json({ mensagem: 'Código de recuperação enviado com sucesso.' })
            } catch (error) {
                return res.status(500).json({ mensagem: 'Não foi possível gerar um código de recuperação.' })

            }
            
        }

        return res.status(406).json({ mensagem: 'Não foi possível gerar um código de recuperação.' })
    }
})

export default handler