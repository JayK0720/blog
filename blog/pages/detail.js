import React from 'react';
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import Author from '../components/author';
import {Breadcrumb,Affix} from 'antd';
import {FileOutlined,FireOutlined,CalendarOutlined} from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import MarkdownNav from 'markdown-navbar'
let input ='# P01:课程介绍和环境搭建\n' +
	'[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
	'> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
	'**这是加粗的文字**\n\n' +
	'*这是倾斜的文字*`\n\n' +
	'***这是斜体加粗的文字***\n\n' +
	'~~这是加删除线的文字~~ \n\n'+
	'\`console.log(111)\` \n\n'+
	'# p02:来个Hello World 初始Vue3.0\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n'+
	'***\n\n\n' +
	'# p03:Vue3.0基础知识讲解\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n'+
	'# p04:Vue3.0基础知识讲解\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n'+
	'#5 p05:Vue3.0基础知识讲解\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n'+
	'# p06:Vue3.0基础知识讲解\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n'+
	'# p07:Vue3.0基础知识讲解\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n'+
	'``` var a=11; ```'

function DetailContent(){
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
						source={input}
					/>
				</div>
			</div>
		</div>
	)
}

function ArticleNav(){
	return (
		<Affix>
			<div className={'article-nav'}>
				<div className="nav-title">文章目录</div>
				<MarkdownNav
					className={'article-menu'}
					source={input}
					ordered={false}
				/>
			</div>
		</Affix>
	)
}

function RightContent(){
	return (
		<React.Fragment>
			<Author/><ArticleNav/>
		</React.Fragment>
	)
}


function Detail() {
	return (
		<div className={'detail-page'}>
			<Header/>
			<Layout
				left={<DetailContent/>}
				right={<RightContent/>}
			/>
			<Footer/>
		</div>
	)
}
export default Detail;