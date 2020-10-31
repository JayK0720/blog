const mongoose = require("mongoose");
mongoose.set("useCreateIndex",true);

const adminSchema = mongoose.Schema({
	username: {type:String, required:true, index: {unique: true}},
	password: {type:String, required:true},
	email: {type: String, required:true, index: {unique: true}},
	date: {type: Date, default: Date.now }
});

const AdminModel = mongoose.model('admin',adminSchema);
AdminModel.createIndexes();


const isRegister = (email) => {
	return AdminModel.findOne({email});
}

const find_login = ({username,password}) => {
	return AdminModel.findOne({username,password})
}

const save = (data) => {
	const admin = new AdminModel(data);
	return admin.save();
}

module.exports = {
	save,isRegister,find_login
}

