var arr = [{ id: 110, name: 'a', is_true: false }, { id: 111, name: 'b' }]
const update = (arr, id, is_true) => {
    arr.map((item) => {
        if (item.id == id) {
            item['is_true'] = is_true;
        }
    })
}
update(arr, 110, true);
const arr2 = arr.filter(item => item.is_true == true)
console.log(arr);
console.log(arr2);

/** main函数为入口函数，代码仅支持写在该函数内部，请勿删除该函数
 * @param {data} 页面数据
 * @param {state} 组件状态
 * @param {success} 触发成功回调 仅支持返回参数，多个参数可以通过对象传递 如：在事件编排中需成功后回调拿到xx值，只需要 success(xx)
 * @param {fail} 触发失败回调 仅支持返回参数，多个参数可以通过对象传递 如：在事件编排中需失败后回调拿到xx值，只需要 fail(xx)
 */
function main(data, state, success, fail) {
    //处理函数
    var arr = data.choose; // 空数据源
    var max = data.max_num.num || 2; //最大限制数
    var id = options_872574.id; // id
    var is_true = options_872574.is_true; // 状态
    const update = (arr, id, is_true) => {
        const is_updata = 0;
        // 先去更新操作
        arr.map((item) => {
            if (item.id == id) {
                //如果存在 那就去更新
                item['is_true'] = is_true;
                is_updata++;
            }
        })
        //如果不存在那就去新增
        if (is_updata == 0) {
            arr.push(options_872574);
        }
    }
    update(arr, id, is_true);
    console.log('自定义事件日志', arr)
    // 如果超出限制给出警告
    const warn = arr.filter(item => item.is_true == "true").length > max ? true : false
    success({ arr: arr, warn: warn });
};