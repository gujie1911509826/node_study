//判断两个对象是不是一样
const util = {
    //是否数组
    isArray: (value) => Array.isArray(value),
    //是否对象
    isObject: (value) => typeof (value) == 'object',
    // 长度是否一致
    isLength: (value) => util.isArray(value) ? value.length : util.isObject(value) ? Object.keys(value).length : value
}
const isSameData = (data1, data2) => {
    if (util.isArray(data1) || util.isArray(data2)) {
        return false;
    } else if (!util.isObject(data1) || !util.isObject(data2)) {
        return false;
    } else {
        console.log(util.isLength(data1),util.isLength(data2));
        
        return util.isLength(data1) === util.isLength(data2);
    }

}
// 
const deepCompareData = (data1, data2) => {
    if (isSameData(data1, data2)) {
        for (const key in data1) {
            if (data2.hasOwnProperty(key)) {
                return data2[key] === data1[key] ? true : false
            } else {
                return false;
            }
        }
        return true
    } else {
        console.log('数据不一致');
 return false
    }
}
let d1 = {title:123};
let d2 = {title:'123'};
// deepCompareData(d1, d2);
console.log(deepCompareData(d1, d2));
// console.log( util.isArray(d1));

