const Koa = require("koa");
const router = require("koa-router")();
const app = new Koa();
const Mongoose = require('./util/config.js');
const adminRouter = require('./router/admin');

// Mongoose.connect();

router.get('/news',async ctx => {
	console.log('hello')
	ctx.body = {
		firstName:'kyrie',
		lastName:"irving"
	}
});

app.use(router.routes()).use(router.allowedMethods());
app.use(adminRouter.routes()).use(adminRouter.allowedMethods());

app.listen(5000,() => {
	console.log('app starting at port 5000');
})

