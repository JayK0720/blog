const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

app.use(async ctx => {
	ctx.body = 'hello world';
})


app.listen(8000,() => {
	console.log('app starting at port 8000');
})