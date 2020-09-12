import Router from 'next/router'

export default function redirect(ctx, target) {
    if (ctx.req) {
        // server side
        ctx.res.writeHead(303, { Location: target })
        ctx.res.end()
    } else {
        Router.replace(target)
    }
}