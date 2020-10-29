import React ,{useState} from 'react';
import '../static/css/register.scss';
import axios from '../common/js/api';
import md5 from 'js-md5';
import {Card,Input,Button,Spin,message} from 'antd';
import {useHistory} from 'react-router-dom';
import {UserOutlined,ShoppingOutlined,PhoneOutlined} from '@ant-design/icons';

function Register() {
	const [username,setUserName] = useState("");
	const [password,setPassWord] = useState("");
	const [number,setNumber] = useState("");
	const [spinning,setSpinning] = useState(false);
	const history = useHistory();
	const handleUserName = (event) => {
		let username = event.target.value.trim();
		setUserName(username);
	}
	const handlePassWord = (event) => {
		let password = event.target.value.trim();
		setPassWord(password);
	}
	const handleNumber = (event) => {
		let number = event.target.value.trim();
		setNumber(number);
	}
	const handleRegister = () => {
		if(!username.trim()){
			message.warning("用户名不能为空");
			return;
		}
		if(!password.trim()){
			message.warning("密码不能为空");
			return;
		}
		if(!number.trim()){
			message.warning("手机号不能为空");
			return;
		}
		setSpinning(true);
		axios({
			url:"/api/admin/register",
			method:"post",
			data:{username,password:md5(password),tel:number}
		}).then(() => {
			setSpinning(false);
			message.success("注册成功");
			history.push("/login");
		}).catch(() => {
			setSpinning(false);
			message.warning('该手机号已注册');
		})
	}
	return (
		<div className='register-wrapper'>
			<Spin spinning={spinning}>
				<Card title='账户注册' className={'register-card'}>
					<Input
						placeholder='用户名' onChange={handleUserName}
						className={'username-input register-input'}
						prefix={<UserOutlined />}
					/>
					<Input.Password
						placeholder='密码' onChange={handlePassWord}
						className={'password-input register-input'}
						prefix={<ShoppingOutlined />}
					/>
					<Input
						placeholder="手机号" onChange={handleNumber}
						className={'number-input register-input'}
						prefix={<PhoneOutlined />}
					/>
					<div className="has-account">
						<span>已有账户?去登陆</span>
					</div>
					<Button type={'primary'} onClick={handleRegister} className={'register-button'}>注册</Button>
				</Card>
			</Spin>
			<div className="sign-bg"></div>
		</div>
	)
}

export default Register;