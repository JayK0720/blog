import React from 'react';
import {Switch,Route} from 'react-router-dom';
import router from './router';

function App() {
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
