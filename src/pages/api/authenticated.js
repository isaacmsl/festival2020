import { verify } from 'jsonwebtoken'

export const authenticated = fn => async (req, res) => {
    verify(req.cookies.authorization, process.env.SIGN, async function(err, decoded) {
        if(!err && decoded) {
            req.participante = decoded
            return await fn(req, res)
        }

        res.status(500).json({message: 'Você não está autenticado'})
    })
}