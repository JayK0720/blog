import React ,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import '../static/css/login.scss';
import {Card,Input,Button,Spin,message} from 'antd';
import {UserOutlined,KeyOutlined,WechatOutlined , QqOutlined,WeiboCircleOutlined } from '@ant-design/icons';
import axios from '../common/js/api';
import md5 from 'js-md5';

function Login (props) {
	const [username,setUserName] = useState("");
	const [password,setPassWord] = useState("");
	const [isLogin,setIsLogin] = useState(false);
	const history = useHistory();
	const handleLogin = () => {
		if(!username) {
			message.warning('用户名不能为空');
			return;
		}
		if(!password){
			message.warning('密码不能为空');
			return;
		}
		axios({
			url:"/api/admin/login",
			method:'post',
			data:{
				username,
				password:md5(password)
			}
		}).then(() => {
			history.push("/admin");
		}).catch(() => {
			message.warning("账号或密码错误");
		})
	}
	const handleUserName = (event) => {
		console.log(event);
		setUserName(event.target.value.trim());
	}
	const handlePassWord = (event) => {
		setPassWord(event.target.value.trim());
	}
	return (
		<React.Fragment>
			<div className="login-wrapper">
				<Spin spinning={isLogin}>
				<Card title={'博客内容管理系统'} className={'login-card'}>
					<div className="user-input input-wrapper">
						<Input
							prefix={<UserOutlined/>} size="large" placeholder={'用户名'}
							value={username}
							onChange={handleUserName}
						/>
					</div>
					<div className="password-input input-wrapper">
						<Input.Password
							prefix={<KeyOutlined/>} size={'large'} placeholder={'密码'}
							value={password}
							onChange={handlePassWord}
						/>
					</div>
					<div className="cannot-login">
						<span>忘记密码?</span>
					</div>
					<div className="social-login">
						<div className='social-text'>社交账号登陆</div>
						<div className="social-account">
							<button className={'wechat account-login-button'}>
								<WechatOutlined/>
								<span className={'account-text'}>微信</span>
							</button>
							<button className={'qq account-login-button'}>
								<QqOutlined/>
								<span className={'account-text'}>QQ</span>
							</button>
							<button className={'weibo account-login-button'}>
								<WeiboCircleOutlined />
								<span className={'account-text'}>微博</span>
							</button>
						</div>
					</div>
					<Button
						type={'primary'} size="large" className='login-button'
						onClick={handleLogin}
						>登陆</Button>
				</Card>
			</Spin>
			</div>
			<div className="home-bg"></div>
		</React.Fragment>
	)
}

export default Login;