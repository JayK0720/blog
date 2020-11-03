const Koa = require("koa");
const router = require("koa-router")();
const app = new Koa();
const {Mongoose} = require('./util/config.js');
const adminRouter = require('./router/user');
const bodyParser = require('koa-bodyparser');
const session = require("koa-session");

Mongoose.connect();
app.use(bodyParser());
app.keys = ['react-blog'];

app.use(async (ctx,next) => {
	ctx.set("Access-Control-Allow-Origin","http://localhost:3000");
	ctx.set("Access-Control-Allow-Methods",'GET,POST,PUT,DELETE');
	ctx.set("Access-Control-Allow-Credentials",true);
	ctx.set("Access-Control-Allow-Headers",'Content-Type');
	await next();
})

const config = {
	key:"koa.sess",
	maxAge:1000*60*60*24,
	httpOnly:true,
	signed:true,
	overwrite:true,
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
	console.log('app starting at port 5001');
})

