import { verify } from 'jsonwebtoken'

export const isAuthenticated = fn => async (req, res) => {
    verify(req.cookies.authorization, process.env.SIGN, async function (err, decoded) {
        if (!err && decoded) {
            req.participante = decoded
            return await fn(req, res)
        }

        res.status(401).json({ message: 'Você não está autenticado' })
    })
}