import React from 'react'
import {Avatar,Divider} from 'antd'
import {GithubOutlined,QqOutlined,WechatOutlined} from '@ant-design/icons';
import styles from '../styles/components/author.module.scss'

function Author (){
	return (
		<div className={styles.author_wrapper}>
			<Avatar size={64} src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602439091113&di=1c22292e8e0499fd895b787068dd7493&imgtype=0&src=http%3A%2F%2Fcdn4.hbimg.cn%2Fstore%2Fwm%2Fpiccommon%2F1216%2F12166%2FD52581BCB898DDC2EBAECDB80E.jpg'}/>
			<div className={styles.author_name}>牧童</div>
			<p className={styles.introduction}>
				自然和自然界的规律隐藏在黑暗之中,上帝说: 要不让牛顿去吧,于是世界一片光明
			</p>
			<Divider>社交账号</Divider>
			<div className={styles.account}>
				<GithubOutlined className={styles.account_icon}/>
				<QqOutlined className={styles.account_icon}/>
				<WechatOutlined className={styles.account_icon}/>
			</div>
		</div>
	)
}

export default Author;