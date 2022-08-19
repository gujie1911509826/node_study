console.log("我是不会改变原数组的函数");

var arr = [{ message: '请输入' }, { success: false }];
var arr2 = ['message','success']
// foreach
arr.forEach((item) => {
    console.log(item);
})

// filter
arr.filter((item) => item.success == false)
console.log('过滤出所有失败的数据——是数组', arr.filter(item =>item.success == false)[0]?.success);

// map 
arr.map(item=>item);

// slice 裁剪
arr.slice(0,arr.length);
console.log(arr.slice(0,arr.length));
// 返回对应下标
arr.findIndex((item)=>item.success==false)
console.log(arr.findIndex(item=>item.success==false));


// some  every join reduce 
arr.some((item)=>console.log('item',item))

