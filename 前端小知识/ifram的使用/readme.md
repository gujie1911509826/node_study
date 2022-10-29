1. iframe 标签的使用

2. iframe 东西加载完  获取到的dom节点 需要在 window.onload 事件中获取
   如果直接在脚本中进行   通过document。getElementByTagName("iframe")[0]
                         获取到 iframe 节点后  打印这个值 只能获取<head>+<body> 
                         <body>里面的东西都会获取不到
                         所以需要在  contentDocument
                         window.onload = ()=>{
                            document.getElementByTagName('iframe')[0].contentDocument.getElementByClassName('root')[0].onclick();
                         }