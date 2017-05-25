'use strict';

/**
 * @author palmtale
 * @since 2017/5/24.
 */


import Koa from 'koa';
import Router from 'koa-router';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = new Koa();
        const router = new Router();

        router.get('/p/:id', async (ctx) => {
            const actualPage = '/post';
            const queryParams = { title: ctx.params.id };
            await app.render(ctx.req, ctx.res, actualPage, queryParams);
            ctx.respond = false;
        });

        router.get('*', async ctx => {
            await handle(ctx.req, ctx.res);
            ctx.respond = false
        });

        server.use(async (ctx, next) => {
            ctx.res.statusCode = 200;
            await next();
        });
        server.use(router.routes());

        server.listen(3000, err => {
            if (err) {
                throw err;
            }
            console.log('> Ready on http://localhost:3000')
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1)
    });