import React from 'react';
import {FileOutlined,ReadOutlined ,FileImageOutlined,ShrinkOutlined} from '@ant-design/icons'
import {Popover} from 'antd';
import '../static/css/tool-bar.scss';

function ToolBar (props) {
	const {isPreview,onClick} = props;
	return (
		<div className={'tool-bar'}>
			<Popover content={'插入图片'}>
				<div className={'tool-icon'}><FileImageOutlined/></div>
			</Popover>
			<Popover content={'保存'}>
				<div className={'tool-icon'} ><FileOutlined/></div>
			</Popover>
			{isPreview
				? (
					<Popover content={'返回'}>
							<div className={'tool-icon'} onClick={onClick}><ShrinkOutlined /></div>
					</Popover>)
				: (
					<Popover content={'切换到预览模式'}>
							<div className={'tool-icon'} onClick={onClick}><ReadOutlined/></div>
					</Popover>)}
		</div>
	)
}
export default ToolBar;