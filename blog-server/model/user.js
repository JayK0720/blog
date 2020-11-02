const mongoose = require("mongoose");
mongoose.set("useCreateIndex",true);

const userSchema = mongoose.Schema({
	username: {type:String, required:true, index: {unique: true}},
	password: {type:String, required:true},
	email: {type: String, required:true, index: {unique: true}},
	date: {type: Date, default: Date.now }
});

const userModel = mongoose.model('user',userSchema);
userModel.createIndexes();

// 邮箱是唯一的,判断是否注册过
const isRegister = (email) => {
	return userModel.findOne({email});
}
// 是否登陆过
const find_login = ({username,password}) => {
	return userModel.findOne({username,password})
}
// 保存登陆数据
const save = (data) => {
	const user = new userModel(data);
	return user.save();
}

module.exports = {
	save,isRegister,find_login
}

