import React from 'react';
import {Row, Col} from 'antd';
import styles from '../styles/components/layout.module.scss';

function Layout(props) {
	return (
		<Row justify={'center'} className={styles.main_content_wrapper}>
			<Col
				xs={24} sm={24} md={14} lg={13} xl={15}
				className={styles.main_content}
			>
				{props.left}
			</Col>
			<Col
				xs={0} sm={0} md={9} lg={7} xl={6}
				className={styles.right_nav}
			>
				{props.right}
			</Col>
		</Row>
	)
}

export default Layout;