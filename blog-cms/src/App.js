import React ,{useEffect} from 'react';
import {Switch,Route,useHistory} from 'react-router-dom';
import router from './router';
import axios from './common/js/api.js';

function App() {
	const history = useHistory();
	useEffect(() => {
		axios({
			method:"post",
			url:"/api/admin/is_logged"
		}).then(() => {
			console.log("登陆过");
		}).catch(() => {
				history.push("/login");
			})
	},[])
	return (
		<div className="App">
			<Switch>
				{router.map((route,index) => (
						<Route path={route.path} key={'route-'+index}>
							<route.component routes={route.routes}/>
						</Route>
					))
				}
			</Switch>
		</div>
	);
}

export default App;
