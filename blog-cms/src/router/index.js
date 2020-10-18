import Login from '../pages/login';
import Admin from '../pages/admin';
import AddArticle from '../components/add-article'
const routes = [
	{
		path:'/login',
		component:Login
	},
	{
		path:'/admin',
		component:Admin,
		routes:[
			{
				path:'/admin/add',
				component:AddArticle
			}
		]
	}
]

export default routes;