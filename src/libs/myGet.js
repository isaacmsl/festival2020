import axios from 'axios'

export default async function myGet(ctx, uri) {
    if (ctx.req) {
        const { host, cookie } = ctx.req.headers;
        const response = await axios.get(`http://${host}${uri}`, {
            headers: {
                cookie
            }
        })
        return response.data
    } else {
        const response = await axios.get(uri)
        return response.data
    }
}
