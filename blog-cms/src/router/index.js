import Login from '../pages/login';
import Admin from '../pages/admin';
import AddArticle from '../components/add-article'
import Preview from '../pages/preview'
import Register from '../pages/register'
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