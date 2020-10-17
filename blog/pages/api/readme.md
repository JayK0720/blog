```js
const [html, setHtml] = useState();

useEffect(() => {
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  //....
});

setHtml(content ? marked(content) : null);
}, [content]);
```

```css
.color{
    color:red;
    font-size:18px;
    font-weight:bold;
}
```