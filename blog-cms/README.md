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

    mongoose  find 和 findOne的区别
    mongoose 判断其中一个条件是否满足
    
    js-md5 sha1 加密方式
    koa-session 数据持久化
    发送邮箱验证码
    微信/QQ等扫码验证      
    
    react-router-dom 编程式导航  
    局部作用域css
    发送验证码后 倒计时
    
    redis 学习
    
    react-router-dom 路由跳转动画
    
    报错: Can't perform a React state update on an unmounted component, when using no async effects in useEffect
    
    
    博客内容字段
        title:  博客内容
        content： 主要内容
        update-time: 修改时间
        create-time: 完成时间
        id:     博客id
        user:   作者
        menu:   所属的第一级目录
        sub-menu: 所属的第二级目录
        watch   观看次数
        type:   图文/视频
        
        