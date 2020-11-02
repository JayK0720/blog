const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const Mongoose = {
	// url:"mongodb://jayk:15209891396jk@121.43.126.106:27017/admin",
	url:"mongodb://localhost:27017/react-blog",
	connect(){
		mongoose.connect(this.url,{useNewUrlParser:true},(err) => {
			if(err){
				console.log(err);
				return;
			}
			console.log('数据库连接成功');
		})
	}
}

const Email = {
	config: {
		host: "smtp.qq.com",
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: "2165767230@qq.com", // generated ethereal user
			pass: "sfajjwipqrkzdhic", // generated ethereal password
		}
	},
	get transporter () {
		return nodemailer.createTransport(this.config);
	},
	get verify() {
		return Math.random().toString().substring(2,6);
	}
}

module.exports = {
	Mongoose,
	Email
};