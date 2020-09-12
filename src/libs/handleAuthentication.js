import Router from 'next/router'
import axios from 'axios'

export default function handleAuthentication(ctx, expectedAuthentication, redirect) {
    if (ctx.req) {
        // server side
        const authorization = ctx.req.headers.cookie

        if (expectedAuthentication && !authorization || !expectedAuthentication && authorization) {
            ctx.res.writeHead(303, { Location: redirect })
            return ctx.res.end()
        }

    } else {
        axios.get('/api/isAuthenticated').then(response => {
            const { isAuthenticated } = response.data
            
            if (expectedAuthentication && !isAuthenticated || !expectedAuthentication && isAuthenticated) {
                Router.replace(redirect)
            }
        }) 
    }
}