import React,{useState} from 'react';
import ReactMarkdown from 'react-markdown';
import HighLight from './highlight';
import {Row,Col,Input,Button,Select} from 'antd';
/*
* todo  1. 切换到预览模式
*  	    2. 按tab键缩进
* 		3. 插入图片
* 		4. 点击保存
* 		5. 切换回编辑模式
* 		6. 生成一个不重复的id
* */

function AddArticle () {
	const [article,setArticle] = useState("");
	const [title,setTitle] = useState("");
	const [type,setType] = useState("file");
	const handleEdit = (event) => {
		setArticle(event.target.value);
	}
	const handleEditTitle = (event) => {
		const value = event.target.value.trim();
		setTitle(value);
	}
	const handleSelectType = (value) => {
		console.log(value);
		setType(value);
	}
	const handlePublish = () => {
		console.log('发布');
	}
	return (
		<div className={'article-wrapper'}>
			<header className={'left-header'}>
				<Input placeholder={'请输入博客标题'} onChange={handleEditTitle} value={title}/>
				<Select value={type} className={'select-type'} onChange={handleSelectType}>
					<Select.Option value={'file'}>图文</Select.Option>
					<Select.Option value={'video'}>视频</Select.Option>
				</Select>
				<Button
					type={'primary'} className={'publish-button'}
					onClick={handlePublish}
				>发布</Button>
			</header>
			<Row gutter={6} className={'main'}>
				<Col span={12} className={'article'}>
					<Input.TextArea
						value={article}
						placeholder={'博客正文'}
						autoSize={{
							minRows:24
						}}
						onChange={handleEdit}
					></Input.TextArea>
				</Col>
				<Col span={12} className={'preview'}>
					<ReactMarkdown
						source={article}
						escapeHtml={false}
						renderers={{
							code:HighLight
						}}
					/>
				</Col>
			</Row>
		</div>
	)
}

export default AddArticle;