
// 数组循环的方法

var arr = [{ code: 10 }, { value: 100 }, { name: '大乔' }, { age: '18' }];

// for----of
for (let item of arr) {
   console.log('for--of', item);

}
// for--in
for (const item in arr) {
   if (Object.hasOwnProperty.call(arr, item)) {
      const element = arr[item];
      console.log('for--in', element);

   }
}
// map 
arr.map((item) => {
   console.log(item);
})

// for --- earch
arr.forEach(item => {
   console.log('foreach', item);

})

// 升级版 foreach
Array.prototype.forEach.call(arr, (item) => {
   console.log("升级版", item);
})
