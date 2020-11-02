const admin = require('../model/user');
const md5 = require("js-md5");
const {Email} = require('../util/config');
//登陆接口
const login = async (ctx) => {
	let {username,password} = ctx.request.body;
	password = md5(password);
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
// 验证码接口
const verify = async (ctx) => {
	const {email} = ctx.request.body;
	let verify = Email.verify;
	var mailOptions = {
		from: '2165767230@qq.com',
		to: email,
		subject: "验证码",
		text: '您好,您注册账户的验证码为：' + verify,
	}
	let info = await Email.transporter.sendMail(mailOptions);
	if(info) {
		ctx.body = {
			message:"发送成功",
			code:0,
			data:{
				verify
			}
		}
		ctx.session.email = email;
		ctx.session.verify = verify;
	}else{
		ctx.body = {
			message:"发送失败",
			code:-1,
			data:{}
		}
	}
}
// 注册接口
const register = async (ctx) => {
	let {username,password,email} = ctx.request.body;
	let isExist = await admin.isRegister(email);
	if(isExist) {
		ctx.body = {
			message:"邮箱已注册",
			code:-1,
		}
		return;
	}
	password = md5(password);
	const result = await admin.save({username,password,email});
	if(result) {
		ctx.body = {
			message:"注册成功",
			code:0
		}
	}
}
// 退出接口
const logout = async ctx => {
	ctx.session.username = "";
	ctx.body = {
		code:0,
		message:"退出成功"
	}
}
// 判断登陆是否过期
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
	login,register,logout,is_logged,verify
}