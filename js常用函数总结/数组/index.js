// 数组的 增 晒 改 查

var arr = [{ code: '10' }, { value: '100' }, { name: '养不起' }, { age: '70' }]
var arrSort = [0, 12, 32, 3, 234, 2, 443]

// 新增
var obj = { test: "测试新增数据" }
arr.push(obj);

// 删除
arr.pop();

// 新增（头部）
arr.unshift(obj);

// 删除（头部）
arr.shift();

// 排序（默认是通过ASCII码升序）
arrSort.sort((a, b) => a - b);


// 删除
//  ( 起始位置 ，  删除个数  ， 在起始位置插入数据 )
// arr.splice(0,1,arrSort)
// arr.splice(0,2)

// 逆函数
// arr.reverse();

//////////////////////////////////////////////////-----------以上函数会修改原函数----------//////////////////////////////////////////////////////////

// 遍历
arr.forEach((item) =>
    console.log('forEach', item)
)
arr.map((item) => console.log("map", item)
)

// 过滤函数
const filterArr = arr.filter((item) => item.code == 10)
console.log('过滤', filterArr);

// 字符串的截取 slice
const sliceArr = arr.slice(1,4);  //向右看起  左开右闭
console.log('截取',sliceArr);
var str = 'abcdefghijklmnopqrstuvwxyz';
const sliceStr = str.slice(0,1);
console.log('字符串截取',sliceStr);



console.log("arr数组", arr);
console.log("排序数组", arrSort);



