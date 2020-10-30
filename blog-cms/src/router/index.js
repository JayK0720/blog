import Login from '../pages/login';
import Admin from '../pages/admin';
import AddArticle from '../components/add-article'
import Preview from '../pages/preview'
import Register from '../pages/register'
import FindPassword from '../pages/find-password';
const routes = [
	{
		path:'/login',
		component:Login
	},
	{
		path:"/register",
		component:Register
	},
	{
		path:"/find-password",
		component:FindPassword
	},
	{
		path:'/admin',
		component:Admin,
		routes:[
			{
				path:'/admin/add',
				component:AddArticle,
				routes:[
					{
						path:'/admin/add/preview',
						component:Preview
					}
				]
			}
		]
	}
]

export default routes;