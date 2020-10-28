const admin = require('../model/admin');

const login = async (ctx) => {
	let {username,password} = ctx.request.body;
	console.log('password',password);
	const result = await admin.find_login({username,password});
	if(result) {
		ctx.session.username = username;
		ctx.body = {
			code:0,
			message:"登陆成功"
		}
	}else{
		ctx.body = {
			code:-1,
			message:'账号或密码错误'
		}
	}
}

const register = async (ctx) => {
	let {username,password,tel} = ctx.request.body;
	let isExist = await admin.isRegister(tel);
	if(isExist.length) {
		ctx.body = {
			message:"手机号已注册",
			code:-1,
		}
		return;
	}
	const result = await admin.save({username,password,tel});
	console.log("result:",result);
	if(result) {
		ctx.body = {
			message:"注册成功",
			code:0
		}
	}
}

const logout = async ctx => {
	ctx.session.username = "";
	ctx.body = {
		code:0,
		message:"退出成功"
	}
}

const is_logged = async ctx => {
	const username = ctx.session.username;
	if(username) {
		ctx.body = {
			code:0,
			message:"已经登陆过",
			data:{username}
		}
	}else{
		ctx.body = {
			code:-1,
			message:"未登陆"
		}
	}
}

module.exports = {
	login,register,logout,is_logged
}