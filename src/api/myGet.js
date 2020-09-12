import fetch from 'isomorphic-unfetch'
import cookies from 'next-cookies'
import Router from 'next/router'

export async function myGet(url, ctx) {

    const { authorization } = cookies(ctx)

    console.log(authorization)

    const response = await fetch(url, {
        headers: {
            cookie: authorization
        }
    })

    if (response.status === 500 && !authorization) {
        Router.push('/login')
        return
    }

    if (response.status === 500 && authorization) {
        ctx.res.writeHead(302, {
            Location: 'http://localhost:3000/login'
        })
        ctx.res.end()
        return
    }

    const data = await response.json()
    return data
}