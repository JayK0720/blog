import React  from 'react';
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import Author from '../components/author';
import {Breadcrumb,Affix} from 'antd';
import {FileOutlined,FireOutlined,CalendarOutlined} from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import MarkdownNav from 'markdown-navbar';
import HighLightCode from '../components/highlight';

function DetailContent({article}){
	return (
		<div className={'detail-wrapper'}>
			<Breadcrumb className='bread-nav'>
				<Breadcrumb.Item><Link href={'/'}><a>首页</a></Link></Breadcrumb.Item>
				<Breadcrumb.Item>详情</Breadcrumb.Item>
				<Breadcrumb.Item><Link href={'/video'}><a>视频</a></Link></Breadcrumb.Item>
			</Breadcrumb>
			<div className="content-wrapper">
				<h3 className="content-title">React实战视频教程-技术胖blog博客开发</h3>
				<div className="content-desc">
					<p className={'content-date desc-item'}><CalendarOutlined/> <span>2020-10-11</span></p>
					<p className="content-type desc-item"><FileOutlined/> <span>图文</span></p>
					<p className="content-watch desc-item"><FireOutlined/><span>1000人</span></p>
				</div>
				<div className={'article'}>
					<ReactMarkdown
						source={article}
						escapeHtml={false}
						renderers={{
							code:HighLightCode
						}}
					/>
				</div>
			</div>
		</div>
	)
}

function RightContent({article}){
	return (
		<React.Fragment>
			<Author/>
			<Affix offsetTop={60}>
				<div className={'article-nav'}>
					<div className="nav-title">文章目录</div>
					<MarkdownNav
						className={'article-menu'}
						source={article}
						ordered={false}
					/>
				</div>
			</Affix>
		</React.Fragment>
	)
}

function Detail(props) {
	return (
		<div className={'detail-page'}>
			<Header/>
			<Layout
				left={<DetailContent {...props}/>}
				right={<RightContent {...props}/>}
			/>
			<Footer/>
		</div>
	)
}

export async function getStaticProps() {
	const response = await fetch("http://localhost:5000/file");
	const data = await response.text();
	return {
		props:{
			article:data
		}
	}
}
export default Detail;