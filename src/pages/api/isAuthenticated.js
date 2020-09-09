import { verify } from 'jsonwebtoken'

const isAuthenticated = async (req, res) => {
    verify(req.cookies.authorization, process.env.SIGN, async function(err, decoded) {
        if(!err && decoded) {
            return res.status(200).json({ isAuthenticated: true })
        }

        return res.status(200).json({ isAuthenticated: false })
    })
}

export default isAuthenticated