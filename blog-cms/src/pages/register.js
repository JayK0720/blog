import React ,{useState, useRef} from 'react';
import '../static/css/register.scss';
import axios from '../common/js/api';
import md5 from 'js-md5';
import {Card,Input,Button,Spin,message} from 'antd';
import {useHistory} from 'react-router-dom';
import {UserOutlined,ShoppingOutlined,MailOutlined} from '@ant-design/icons';
let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

function Register() {
	const [username,setUserName] = useState("");
	const [password,setPassWord] = useState("");
	const [email,setEmail] = useState("");
	const [spinning,setSpinning] = useState(false);
	const [verify,setVerify] = useState("");
	const [text,setText] = useState("获取验证码");
	const [isSend,setIsSend] = useState(false);
	const timer = useRef();
	const history = useHistory();
	const handleUserName = (event) => {
		let username = event.target.value.trim();
		setUserName(username);
	}
	const handlePassWord = (event) => {
		let password = event.target.value.trim();
		setPassWord(password);
	}
	const handleEmail = (event) => {
		let email = event.target.value.trim();
		setEmail(email);
	}
	const handleVerify = event => {
		let verify = event.target.value.trim();
		setVerify(verify);
	}
	const handleGetVerify = () => {
		if(!email) {
			message.warning("邮箱不能为空");
			return;
		}
		if(!reg.test(email)){
			message.warning("请输入合法邮箱");
			return;
		}
		let i = 60,value;
		setIsSend(true);
		timer.current = setInterval(() => {
			i--;
			value = `${i}s 已发送`;
			setText(value);
			if(i <= 0) {
				setText("重新获取");
			}
		},1000);
	}
	const handleRegister = () => {
		if(!username){
			message.warning("用户名不能为空");
			return;
		}
		if(!password){
			message.warning("密码不能为空");
			return;
		}
		if(!email){
			message.warning("邮箱不能为空");
			return;
		}
		if(!verify){
			message.warning("验证码不能为空");
			return;
		}
		setSpinning(true);
		axios({
			url:"/api/admin/register",
			method:"post",
			data:{username,password:md5(password),email,verify}
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
						placeholder="邮箱" onChange={handleEmail}
						className='email-input register-input'
						prefix={<MailOutlined />}
					/>
					<div className='verify-wrapper'>
						<Input className='verify-text' placeholder='验证码' onChange={handleVerify}/>
						<Button type={'default'} onClick={handleGetVerify} disabled={isSend}>{text}</Button>
					</div>
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