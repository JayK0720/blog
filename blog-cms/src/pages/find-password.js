import React,{useState} from 'react'
import {Spin,Card,Button,Input,message} from 'antd';
import '../static/css/find-password.scss';
import axios from '../common/js/api';
import {LockOutlined,MobileOutlined} from '@ant-design/icons';

function FindPassword(){
	const [number,setNumber] = useState("");
	const [newpassword,setNewPassword] = useState("");
	const [repeatpassword,setRepeatPassword] = useState("");
	const [verify,setVerify] = useState("");
	const [spinning,setSpinning] = useState(false);
	const [text,setText] = useState("获取验证码");
	const [isSend,setIsSend] = useState(false);
	const handleNumber = (event) => {
		let number = event.target.value.trim();
		setNumber(number);
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
	const handleGetVerify = () => {

	}
	const handleConfirm = () => {
		if(!number){
			message.warning("手机号不能为空");
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
		setTimeout(() => {
			setSpinning(false);
		},1000);
	}
	return (
		<div className='find-password-wrapper'>
			<Spin spinning={spinning}>
				<Card title='修改密码' className='find-password-card'>
					<Input placeholder='请输入手机号' className='tel-input' onChange={handleNumber} prefix={<MobileOutlined/>}/>
					<Input.Password placeholder='请输入新密码' className='new-input' onChange={handleNewPassword} prefix={<LockOutlined/>}/>
					<Input.Password placeholder='请再次输入新密码' className='repeat-input' onChange={handleRepeatPassword} prefix={<LockOutlined/>}/>
					<div className='verify-container'>
						<Input placeholder='验证码' className='tel-verify' onChange={handleVerify}/>
						<Button type='default' className='verify-button' onClick={handleGetVerify}>{text}</Button>
					</div>
					<Button type='primary' className='confirm-button' onClick={handleConfirm}>确认</Button>
				</Card>
			</Spin>
		</div>
	)
}

export default FindPassword;