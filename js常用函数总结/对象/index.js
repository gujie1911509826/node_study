// 对象遍历 

// 1. for----in

var obj = { code: 10, value: 100, name: '孙策', age: "43" }
var arr = [{ code: 10 }, { value: 100 }]
Object.defineProperty(obj, 'code', { writable: false }) //将某个参数定义为不可修改
Object.defineProperty(obj, 'age', { enumerable: false }) //将参数设置额为不可枚举
// configurable 是否可删除
// value 值

var obj2 = {};
obj['code'] = 100;
for (let [key, value] of Object.entries(obj)) {
    console.log(key, value);
}
for (const a in obj) {
    if (Object.hasOwnProperty.call(obj, a)) {
        const element = obj[a];
        console.log('for---in',element);
    }
}

//2. Object.keys()
/* 对象返回他的key值   
   数组返回每个下标
   字符串返回每个字符的索引
*/
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log('freeze',Object.freeze(obj));
console.log('entires',Object.entries(obj));
// 如果对象冻结后 （冻结后不能新增修改操作只能查看）
obj['add'] = '我是在他冻结之后新加的数据';
console.log('冻结测试',obj);


//3. Object.getOwnPropertyNames()

console.log(Object.getOwnPropertyNames(obj));
let objarr = Object.getOwnPropertyNames(obj)
console.log(objarr);


//4. Object.assign(a,b) 将a b 合并  a会变 b不会变

var a = { a: 'a' }
var b = { b: 'b' }
Object.defineProperty(a, 'a', { writable: false, enumerable: true })
a['a'] = '我是乱改的'
const c = Object.assign(a, b);
console.log('assign', a, b, c);
