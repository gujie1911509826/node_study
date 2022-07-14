// 对象遍历 

// 1. for----in

var obj = { code: 10, value: 100, name: '孙策', age: "43" }
var arr = [{ code: 10 }, { value: 100 }]
Object.defineProperty(obj, 'code', { writable: false }) //将某个参数定义为不可修改
Object.defineProperty(obj,'age',{enumerable:false}) //将参数设置额为不可枚举

var obj2 = { };
obj['code'] = 100;
for (let [key, value] of Object.entries(obj)) {
    console.log(key, value);

}

//2. Object.keys()

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.freeze(obj));
console.log(Object.entries(obj));

//3. Object.getOwnPropertyNames()
// console.log(Object.getOwnPropertyNames(obj));
let objarr = Object.getOwnPropertyNames(obj)
// console.log(objarr);
