
	 var count = 0;
     function changeCss(val) {
         var s = document.createElement('style');
         s.innerText = val;
         document.head.appendChild(s);
         while (count > 0) {
             let delEl = document.head.getElementsByTagName('style')[1];
             document.head.removeChild(delEl);
             count--;
         }
         count++;
     }

     changeCss(".divider::before {display:none !important}");
















     /** main函数为入口函数，代码仅支持写在该函数内部，请勿删除该函数
 * @param {data} 页面数据
 * @param {state} 组件状态
 * @param {success} 触发成功回调 仅支持返回参数，多个参数可以通过对象传递 如：在事件编排中需成功后回调拿到xx值，只需要 success(xx)
 * @param {fail} 触发失败回调 仅支持返回参数，多个参数可以通过对象传递 如：在事件编排中需失败后回调拿到xx值，只需要 fail(xx)
 */
function main(data, state, success, fail) {
	var doc1 = document.getElementsByClassName('index-module_label__1LnmS');
    var doc2 = document.getElementsByClassName('index-module_item__g03m5');
	var doc3 = document.getElementsByClassName('index-module_box__RMQWh');
	for(let i=0;i<doc1.length;i++){
		doc1[i].style.padding='0px';
		doc2[i].style.padding='0px';
		doc3[i].style.paddingBottom='5px'
	}

// 表格样式
	var doc4 = document.getElementsByTagName('th')
		for(let i=0;i<doc4.length;i++){
		doc4[i].style.padding='4px';
		doc4[i].style.border='none';
		doc4[i].style.background='#ececec';
	}
    

// 去除表头竖线
	 var count = 0;
        function changeCss(val) {
            var s = document.createElement('style');
            s.innerText = val;
            document.head.appendChild(s);
            while (count > 0) {
                let delEl = document.head.getElementsByTagName('style')[1];
                document.head.removeChild(delEl);
                count--;
            }
            count++;
        }

		changeCss(".divider::before {display:none !important}");
};