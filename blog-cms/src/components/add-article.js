import React,{useState} from 'react';
import {Row,Col,Input,Button,Select} from 'antd';
import {Route,Switch,useHistory} from 'react-router-dom';
import ToolBar from './tool-bar'
/*
* todo  1. 切换到预览模式
*  	    2. 按tab键缩进
* 		3. 插入图片
* 		4. 点击保存
* 		5. 切换回编辑模式
* 		6. 生成一个不重复的id
* */

function AddArticle ({routes}) {
	const [article,setArticle] = useState("");
	const [title,setTitle] = useState("");
	const [type,setType] = useState("file");
	const history = useHistory();
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
	const handlePreview = () => {
		console.log('点击了')
		history.push('/admin/add/preview')
	}
	return (
		<React.Fragment>
			<Row className={'article-wrapper'}>
				<Col span={5} className={'article-menu'}>
					<div className="menu-title">文章目录</div>
					<ul className={'menu-list'}>
						<li className={'menu-item'}>react</li>
						<li className={'menu-item'}>redux</li>
						<li className={'menu-item'}>react-router-dom</li>
					</ul>
				</Col>
				<Col span={19} className={'article'}>
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
					<ToolBar isPreview={false} onClick={handlePreview}/>
					<Input.TextArea
						value={article}
						placeholder={'博客正文'}
						onChange={handleEdit}
					></Input.TextArea>
				</Col>
			</Row>
			<Switch>
				{routes.map((route,index) => <Route key={'route-'+index} path={route.path} component={route.component}/>)}
			</Switch>
		</React.Fragment>
	)
}

export default AddArticle;