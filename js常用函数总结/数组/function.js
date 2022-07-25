console.log("数组函数的使用------------数组的增删改");
let arr = [{name:"马克"},{age:'24'}]
let arr2 = [1,43,21,2,324];

//  push pop unshift shift splice reverse  会改变原数组
//push
let obj = {level:'t10086'}
arr.push(obj)

// pop
arr.pop();

// unshift
arr.unshift(obj)

// shift
arr.shift()

// sort
arr2.sort((a,b)=>a-b);

// splice
// 参数a：数组的起始位置
// 参数b：删除数组的个数
// 参数c：可以是多个，在a的位置增减的元素
let arr3 = [];
// console.log(arr3 = arr2.copyWithin(arr2,0,arr2.length));
arr2.splice(2,2,obj);


// reverse 
arr2.reverse();

// console.log("数组",arr);
// console.log(arr2);

