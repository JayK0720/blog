const mongoose = require("mongoose");
mongoose.set("useCreateIndex",true);

const adminSchema = mongoose.Schema({
	username: {type:String, required:true, index: {unique: true}},
	password: {type:String, required:true},
	tel: {type: Number, required:true, index: {unique: true}},
	date: {type: Date, default: Date.now }
});

const AdminModel = mongoose.model('admin',adminSchema);
AdminModel.createIndexes();

const isRegister = (tel) => {
	return AdminModel.find({tel});
}

const save = (data) => {
	const admin = new AdminModel(data);
	return admin.save();
}

module.exports = {
	save,isRegister
}

