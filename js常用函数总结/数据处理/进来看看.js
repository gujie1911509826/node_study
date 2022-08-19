//  字符串形式的数组 转化为数组格式
//  入参      '["123","1231"]'
//  出参       ["123","1231"]
const deal_str_arr = (params_arr) => {
   var arr_item = params_arr.slice(2, params_arr.length - 2).replace(/"/g, "").split(",");
   // console.log(arr_item, Array.isArray(arr_item));
   return arr_item;
}
deal_str_arr('["1314","520"]')


// 数组扁平化   ----  递归
var arr = [1, 2, 3, [4, 5, [6, 7]]];
var arr_result = [];
const deal_arr_long = (arr) => {
   arr.map((item) => {
      /**
       *  此处复习判断时候为数组的方法
       * 1. item.constructor.name=="Array"
       * 2. item instanceof Array ===true
       * 3. Array.isArray(item) === true
       * 4. Object.prototype.toString.call(item)
       */
      if (Array.isArray(item)) {
         deal_arr_long(item); //递归思想
      } else {
         arr_result.push(item);
      }
   })
}
deal_arr_long(arr)
console.log('自己写的递归', arr_result);


// 数组扁平化2  -----  reduce
const deal_reduce_arr = (arr) => {
   return arr.reduce((pre, next) => {
      return pre.concat(Array.isArray(next) ? deal_reduce_arr(next) : next)
   }, [])
}
console.log("reduce_arr", deal_reduce_arr(arr));



// 数据扁平3   ---- split 
const deal_split_arr = (arr) => {
   // var arr_item = arr.toString().replace(/\[||\]/g, '').split(","); // 正则多余
   var arr_item = arr.toString().split(',');
   return arr_item;
}
console.log("split", deal_split_arr(arr))


// 数据扁平4   ----split 
function flatten(arr) {
   arr = arr.toString().split(',');
   console.log(arr);

   var newArr = arr.map((item) => {
      item = +item
      return item
   })
   return newArr
}

console.log(flatten(arr)); //  [1, 2, 3, 4, 5]


// 数据扁平化5  some 
const deal_some_arr = (arr) => {
   // some函数 当函数里面的条件成立时返回true
   while (arr.some(item => Array.isArray(item))) {
      arr = [].concat(...arr)
   }
   return arr;
}
console.log(deal_some_arr(arr));