import React,{useState,useRef} from 'react'
import {Spin,Card,Button,Input,message} from 'antd';
import '../static/css/find-password.scss';
import {LockOutlined,MailOutlined } from '@ant-design/icons';
import axios from '../common/js/api';
import url from '../common/js/url';
import {useHistory} from 'react-router-dom';
import md5 from 'js-md5';
let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

function FindPassword(){
	const [email,setEmail] = useState("");
	const [newpassword,setNewPassword] = useState("");
	const [repeatpassword,setRepeatPassword] = useState("");
	const [verify,setVerify] = useState("");
	const [spinning,setSpinning] = useState(false);
	const [text,setText] = useState("获取验证码");
	const [isSend,setIsSend] = useState(false);
	const history = useHistory();
	const timer = useRef();
	const handleEmail = (event) => {
		let email = event.target.value.trim();
		setEmail(email);
	}
	const handleNewPassword = (event) => {
		let newpassword = event.target.value.trim();
		setNewPassword(newpassword);
	}
	const handleRepeatPassword = event => {
		let repeatpassword = event.target.value.trim();
		setRepeatPassword(repeatpassword)
	}
	const handleVerify = event => {
		let verify = event.target.value.trim();
		setVerify(verify);
	}
	// 点击发送验证码,text 变为倒计时形式,
	const handleGetVerify = () => {
		if(!reg.test(email)){
			message.warning("请输入合法邮箱");
			return;
		}
		axios({
			url:url.verify,
			method:"post",
			data:{email}
		}).then((res) => {
				console.log(res);
				let i = 60;
				let value;
				setIsSend(true);
				timer.current = setInterval(() => {
					i--;
					value = `${i}s 已发送`;
					if(i <= 0) {
						value = '重新获取';
						setIsSend(false);
					}
					setText(value);
				},1000);
			})
	}
	const handleConfirm = () => {
		if(!email){
			message.warning("邮箱不能为空");
			return;
		}
		if(!newpassword || !repeatpassword){
			message.warning("密码不能为空");
			return;
		}
		if(newpassword !== repeatpassword){
			message.warning("两次密码不一致");
			return;
		}
		if(!verify){
			message.warning("验证码不能为空");
			return;
		}
		setSpinning(true);
		axios({
			url:url.find_password,
			method:"post",
			data:{
				email,verify,password:md5(newpassword)
			}
		}).then(res => {
			console.log('修改密码:',res);
			setSpinning(false);
			history.push("/login");
			if(timer.current){
				clearInterval(timer.current);
			}
		})
			.catch((msg) => {
				message.warning(msg);
				setSpinning(false);
			})
	}
	return (
		<div className='find-password-wrapper'>
			<Spin spinning={spinning}>
				<Card title='修改密码' className='find-password-card'>
					<Input placeholder='请输入注册邮箱' className='email-input' onChange={handleEmail} prefix={<MailOutlined/>}/>
					<Input.Password placeholder='请输入新密码' className='new-input' onChange={handleNewPassword} prefix={<LockOutlined/>}/>
					<Input.Password placeholder='请再次输入新密码' className='repeat-input' onChange={handleRepeatPassword} prefix={<LockOutlined/>}/>
					<div className='verify-container'>
						<Input placeholder='验证码' className='email-verify' onChange={handleVerify}/>
						<Button type='default' className='verify-button' onClick={handleGetVerify} disabled={isSend}>{text}</Button>
					</div>
					<Button type='primary' className='confirm-button' onClick={handleConfirm}>确认</Button>
				</Card>
			</Spin>
			<div className="sign-bg"></div>
		</div>
	)
}

export default FindPassword;