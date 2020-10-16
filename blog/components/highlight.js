import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

function HighLightCode(props){
	let {value,language} = props;
	return (
		<div className={'highlight'}>
			<SyntaxHighlighter language={language} useInlineStyles={false}>
				{value}
			</SyntaxHighlighter>
		</div>
	)
}

export default HighLightCode;