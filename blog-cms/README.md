# bug

    代码高亮插件和markdown转换显示 
        react-syntax-highlighter / react-markdown
        
    在使用react-syntax-highlighter实时渲染时, 编辑文本内容为``` 时会报错, 因为  react-syntax-highlighter 不能转换undefined值。
    
```js
// 解决方法,

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
```
        