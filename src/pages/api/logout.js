import nextConnect from 'next-connect'
import cookie from 'cookie'
import { isAuthenticated } from '../../middlewares/isAuthenticated'

const handler = nextConnect()

handler.post(isAuthenticated(async (req, res) => {

    res.setHeader('Set-Cookie', cookie.serialize('authorization', '', {
        maxAge: -1,
        path: '/'
    }))

    return res.status(200).json({ mensagem: 'Deslogado com sucesso!' })

}))

export default handler