const Koa = require("koa");
const router = require("koa-router")();
const app = new Koa();
const Mongoose = require('./util/config.js');
const adminRouter = require('./router/admin');
const bodyParser = require('koa-bodyparser');
const session = require("koa-session");

Mongoose.connect();
app.use(bodyParser());
app.keys = ['react-blog'];
const config = {
	key:"koa.sess",
	maxAge:1000*60*60*24*7,
	httpOnly:true,
	signed:true,
	secure:true,
}
app.use(session(config,app));

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

