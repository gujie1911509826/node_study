let sourceData = [
    { name: "张三", age: 18 },
    { name: "李四", age: 28 },
    { name: "王五", age: 38 }
]
header = ['name', 'age']

function tranData(sourceData, header) {//sourceData 原始数据 header筛选条件 
    const newArr = []//我们想要的那个二维数组
    // 处理逻辑
    // 根据header中的字段 去sourceData中的每一项中去匹配
    // 符合条件的项 对应的value拿出来 放到一个数组中 然后把这个数组push到newArr

    sourceData.forEach((item) => {
        // item  ->  { name: "张三", age: 18, height: 180 }
        // 遍历对象
        // 这个数组是二维大数组中的小数组
        let arr = []//["张三", 18]
        // 这个遍历是进行筛选往小数组中填充符合数据的项
        Object.keys(item).forEach(key => {
            // key -> name / age / height
            if (header.includes(key)) {//判断header包含key的键值
                // 当前符合条件
                arr.push(item[key])//item[key]=张三/18
            }
        })  // ['name','age','height']
        // 是把处理之后的小数组添加到二维的大数组中
        newArr.push(arr)//得到我们最终想要的二维数组
    })
    return newArr
}

console.log(tranData(sourceData, header));
