import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {monokaiSublime} from 'react-syntax-highlighter/dist/esm/styles/hljs';

function HighLight (props) {
	let {value} = props;
	if(value === undefined) {
		value = "";
	}
	return (
		<SyntaxHighlighter style={monokaiSublime}>
			{value}
		</SyntaxHighlighter>
	)
}

export default HighLight;