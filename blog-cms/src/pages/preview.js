import React ,{useState} from 'react';
import '../static/css/preview.scss';
import HighLight from '../components/highlight';
import ReactMarkdown from 'react-markdown';
import ToolBar from '../components/tool-bar';
import {Row,Col} from 'antd';
import {useHistory} from 'react-router-dom';

function Preview () {
    const history = useHistory();
    const handleBackToEdit = () => {
        history.push('/admin/add')
    }
    return (
        <Row className={'preview-wrapper'}>
            <Col span={12} className={'main-content'}>
                <ToolBar isPreview={true} onClick={handleBackToEdit}/>
            </Col>
            <Col span={12} className={'preview-content'}></Col>
        </Row>
    )
}

export default Preview;