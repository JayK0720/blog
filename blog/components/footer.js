import React from 'react';
import styles from '../styles/components/footer.module.scss';

export default function Footer () {
	return (
		<div className={styles.footer_wrapper}>
			<p className={styles.skill}>Powered by React Antd Design Koa</p>
			<p className={styles.realm}>jayk23.com</p>
			<div className={styles.copyright}>
				<span className={styles.hz_icon}></span>
				<a
					className={styles.link}
					href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011002002436"
					target={"_blank"}
				>浙ICP备20001796号</a>
			</div>
		</div>
	)
}

