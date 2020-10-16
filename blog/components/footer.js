import React from 'react';
import styles from '../styles/components/footer.module.scss';

export default function Footer () {
	return (
		<div className={styles.footer_wrapper}>
			<p className={styles.breadcrumb}>Powered By React · Antd Design · Koa</p>
			<p className={styles.footer}>
				<span className={styles.copyright}>©</span>
				<span>jayk23.com</span>
				<a
					className={styles.link}
					href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011002002436"
					target={"_blank"}
				>浙ICP备20001796号</a>
			</p>
		</div>
	)
}

