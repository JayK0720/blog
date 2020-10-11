import React from 'react';
import styles from '../styles/components/header.module.scss';
import {Row,Col,Menu} from 'antd'
import {HomeOutlined,SmileOutlined,VideoCameraOutlined} from '@ant-design/icons';
import Head from 'next/head';

function Header(){
	return (
		<React.Fragment>
			<Head><title>首页</title></Head>
			<Row justify='center' className={styles.header}>
				<Col xs={24} sm={24} md={12} lg={10} xl={10} className={styles.header_left}>
					<span className={styles.user}>牧童</span>
					<span className={styles.header_text}>keep learning and coding!</span>
				</Col>
				<Col xs={0} sm={0} md={10} lg={10} xl={8}>
					<Menu mode='horizontal'>
						<Menu.Item icon={<HomeOutlined/>}>首页</Menu.Item>
						<Menu.Item icon={<VideoCameraOutlined/>}>视频</Menu.Item>
						<Menu.Item icon={<SmileOutlined/>}>生活</Menu.Item>
					</Menu>
				</Col>
			</Row>
		</React.Fragment>
	)
}

export default Header;