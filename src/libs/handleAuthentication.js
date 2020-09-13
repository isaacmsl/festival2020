import Router from 'next/router'
import axios from 'axios'

const isServer = () => typeof window === 'undefined'

export default function handleAuthentication(ctx, expectedAuthentication, redirect) {
    if (isServer()) {
        return new Promise((resolve, reject) => {
            const authorization = ctx.req.headers.cookie

            if (expectedAuthentication && !authorization || !expectedAuthentication && authorization) {
                ctx.res.writeHead(303, { Location: redirect })
                ctx.res.end()
                reject()
            }

            resolve()
        })
    } else {
        return new Promise(async (resolve, reject) => {
            try {
                const { data: { isAuthenticated } } = await axios.get('/api/isAuthenticated')

                if (expectedAuthentication && !isAuthenticated || !expectedAuthentication && isAuthenticated) {
                    Router.replace(redirect)
                    reject()
                }

                resolve()
            } catch (error) { reject() }
        })
    }
}