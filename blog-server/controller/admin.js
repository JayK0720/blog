const login = async (ctx) => {
	ctx.body = {
		message:"登陆页面",
		code:0
	}
}

const register = async (ctx) => {

}

const logout = async ctx => {

}

const find_password = async ctx => {

}

module.exports = {
	login,register,logout,find_password
}