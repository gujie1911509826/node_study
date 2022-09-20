
// 数组循环的方法

var arr = [{ code: 10 }, { value: 100 }, { name: '大乔' }, { age: '18' }];

// for----of
for (let item of arr) {
   console.log('for--of', item);
}
/**
for--of { code: 10 }
for--of { value: 100 }
for--of { name: '大乔' }
for--of { age: '18' }
 */


// for--in
for (const item in arr) {
   if (Object.hasOwnProperty.call(arr, item)) {
      const element = arr[item];
      console.log('for--in', element);
   }
}
/**
for--of { code: 10 }
for--of { value: 100 }
for--of { name: '大乔' }
for--of { age: '18' }
 */

// map 
arr.map((item) => {
   console.log(item);
})
/**
{ code: 10 }
{ value: 100 }
{ name: '大乔' }
{ age: '18' }
 */


// for --- earch
arr.forEach(item => {
   console.log('foreach', item);
})
/**
foreach { code: 10 }
foreach { value: 100 }
foreach { name: '大乔' }
foreach { age: '18' }
 */

// 升级版 foreach
Array.prototype.forEach.call(arr, (item) => {
   console.log("升级版", item);
})
/**
升级版 { code: 10 }
升级版 { value: 100 }
升级版 { name: '大乔' }
升级版 { age: '18' }
 */