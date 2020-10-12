import {Calendar} from 'antd';
import React from 'react';

function CurrentDate(){
	return (
		<Calendar fullscreen={false} style={{padding:'10px 15px',backgroundColor:'#fff'}}/>
	)
}

export default CurrentDate;