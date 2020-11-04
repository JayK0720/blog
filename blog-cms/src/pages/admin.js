import React ,{useEffect} from 'react';
import {Layout, Menu} from 'antd';
import {Route,Switch,Link,useHistory} from 'react-router-dom';
import '../static/css/admin.scss';
import {MenuOutlined, DesktopOutlined , FileAddOutlined } from '@ant-design/icons';
import axios from '../common/js/api';
import url from '../common/js/url'
import {setUser} from '../store/actions';
import {connect} from 'react-redux';

const {Content, Sider} = Layout;

let Admin =  ({routes,setUser}) => {
	const history = useHistory();
	useEffect(() => {
		axios({
			url:url.is_logged,
			method:"post"
		}).then(res => {
			let username = res.data.username;
			setUser(username);
		})
			.catch(() => {
				history.push("/login");
			})
	},[setUser,history]);
	return (
		<Layout>
			<Sider
				style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0}}
			>
				<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
					<Menu.Item key="1" icon={<DesktopOutlined />}>
						工作台
					</Menu.Item>
					<Menu.Item key="2" icon={<MenuOutlined/>}>
						文章管理
					</Menu.Item>
					<Menu.Item key="3" icon={<FileAddOutlined />}>
						<Link to={'/admin/add'}>添加文章</Link>
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout className="site-layout" style={{marginLeft: 200}}>
				<Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
					<div className="site-layout-background" style={{padding: 24, textAlign: 'center'}}>
						<Switch>
							{routes.map((route,index) => (
								<Route path={route.path} key={'sub-'+index}><route.component routes={route.routes}/></Route>
							))}
						</Switch>
					</div>
				</Content>
			</Layout>
		</Layout>
	)
}
const mapStateToProps = state => {
	return {username:state.user}
}
const mapDispatchToProps = {setUser}
Admin = connect(mapStateToProps,mapDispatchToProps)(Admin);

export default Admin;
