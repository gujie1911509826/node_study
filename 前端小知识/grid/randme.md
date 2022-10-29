 display: grid;



设置行和列

grid-template-columns :  200px 1fr 2fr  左边不变 右边倍数；           1fr 1fr minmax(300px, 2fr);      100px auto 100px;  左边右边不变 中间自适应

grid-template-rows :  repeat ( 2 , 500px)    repeat ( auto-fill , 500px)  


设置列宽间距

grid-gap



grid-template-areas ：     定义区域  在子元素中使用 grid-area:  属性为它的区域名称
". header  header " 
" sidebar content content";



grid-auto-flow: row | column;   控制是先行还是先列   dense  尽可能填满


子属性设置

grid-column-start 属性、grid-column-end 属性、grid-row-start 属性以及grid-row-end 属性

