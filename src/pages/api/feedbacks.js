import nextConnect from 'next-connect'
import dbMiddleware from '../../middlewares/database'

const handler = nextConnect()

const COLLECTION_FEEDBACK = 'feedbacks'

handler.use(dbMiddleware)

handler.post(async (req, res) => {

    const {
        nomeParticipante,
        emailParticipante,
        feedback
    } = req.body

    const containsNome = nomeParticipante && nomeParticipante.length > 0 
    const containsEmail = emailParticipante && emailParticipante.length > 0 
    const containsFeedback = feedback && feedback.length > 0

    if (containsNome & containsEmail & containsFeedback) {

        const newDocument = {
            nomeParticipante,
            emailParticipante,
            feedback
        }
        const response = await req.db.collection(COLLECTION_FEEDBACK).insertOne(newDocument)
            
        if (response.insertedCount) {
            return res.status(200).json({ mensagem: 'Obrigado pelo seu feedback. A equipe do Festival Maestro Felinto Lúcio Dantas agradece muito!'})
        }

        return res.status(500).json({ mensagem: 'Não foi possível enviar o feedback por motivos desconhecidos.'})
    }

    return res.status(406).json({ mensagem: 'Não foi possível enviar o feedback pois algumas parâmetros não foram aceitados.' })
})

export default handler
