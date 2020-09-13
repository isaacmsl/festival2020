import axios from 'axios'

export default async function myGet(ctx, expectedAuthorization, uri) {
    if (ctx && ctx.req) {
        const { host, cookie } = ctx.req.headers;
        
        if (expectedAuthorization) {
            const response = await axios.get(`http://${host}${uri}`, {
                headers: {
                    cookie
                }
            })

            return response.data
        }

        const response = await axios.get(`http://${host}${uri}`)
        return response.data
    } else {
        const response = await axios.get(uri)
        return response.data
    }
}
