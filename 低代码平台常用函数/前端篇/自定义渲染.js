function renderFunc(text, row, index) {
    return text == '全省'
        ? '<a href="javascript:onClick="javascript:lcdpApi.selCustomFunc[\'880004091895754752\'][\'allProvinceClick\']()" >' + text + "</a>" : '<a href="javascript:;" onClick="javascript:lcdpApi.selCustomFunc[\'880004091895754752\'][\'cityClick\'](' + row.id + ')" >' + text + "</a>";
}


(text, row, index) => {
    var page_id = `${textlcdpApi?.data?.currentPageId}`;
    var fun_name = '';
    var parmas = row;
    return `<a href="javascript:onClick="javascript:lcdpApi.selCustomFunc[${page_id}][${fun_name}](${parmas})" >`
}




/** main函数为入口函数，代码仅支持写在该函数内部，请勿删除该函数
 * @param {data} 页面数据
 * @param {state} 组件状态
 * @param {success} 触发成功回调 仅支持返回参数，多个参数可以通过对象传递 如：在事件编排中需成功后回调拿到xx值，只需要 success(xx)
 * @param {fail} 触发失败回调 仅支持返回参数，多个参数可以通过对象传递 如：在事件编排中需失败后回调拿到xx值，只需要 fail(xx)
 */
 function main(data, state, success, fail) {
	var page_id=lcdpApi?.data?.currentPageId;
    var fun_name = 'get_data';
    var parmas = {name:'南京'};
    lcdpApi.selCustomFunc[page_id][fun_name](parmas)
};