const admin = require('../model/admin');

const login = async (ctx) => {
	let {username,password} = ctx.request.body;

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
	
}

const find_password = async ctx => {

}

module.exports = {
	login,register,logout,find_password
}