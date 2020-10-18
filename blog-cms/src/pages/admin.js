import React from 'react';
import {Layout, Menu} from 'antd';
import {Route,Switch,Link} from 'react-router-dom';
import '../static/css/admin.scss';
import {
	MenuOutlined, DesktopOutlined , FileAddOutlined  ,
} from '@ant-design/icons';
const {Content, Footer, Sider} = Layout;
function Admin({routes}) {
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
								<Route path={route.path} key={'sub-'+index}><route.component/></Route>
							))}
						</Switch>
					</div>
				</Content>
				<Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
			</Layout>
		</Layout>
	)
}

export default Admin;
