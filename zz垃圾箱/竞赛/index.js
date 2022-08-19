var arr = [
    {
        "y0": "4",
        "x": "客服系统",
        "y1": "BSS产品线"
    },
    {
        "y0": "1",
        "x": "CRM系统",
        "y1": "BSS产品线"
    },
    {
        "y0": "2",
        "x": "CPCP系统",
        "y1": "BSS产品线"
    },
    {
        "y0": "1",
        "x": "清查系统",
        "y1": "OSS产品线"
    },
    {
        "y0": "2",
        "x": "维保系统",
        "y1": "OSS产品线"
    },
    {
        "y0": "2",
        "x": "KUDU系统",
        "y1": "大数据产品线"
    },
    {
        "y0": "3",
        "x": "AI分析系统",
        "y1": "大数据产品线"
    },
    {
        "y0": "4",
        "x": "数据开发系统",
        "y1": "大数据产品线"
    },
    {
        "y0": "1",
        "x": "订单系统",
        "y1": "政企业务产品线"
    },
    {
        "y0": "1",
        "x": "渠道系统",
        "y1": "政企业务产品线"
    },
    {
        "y0": "2",
        "x": "资源R9系统",
        "y1": "资源产品线"
    }
]

let set = new Set();
arr.map(item => {
    console.log(item);
    set.add(item.y1)
    // set.add(item?.y1);
})
console.log(set);
let arr_new = [];
set.forEach((item) =>{
let arr_temp = arr.filter(item2=>item2.y1===item);
let arr_y =[];
arr_temp.map((item_y,index)=>{arr_y.push({index:item_y.x})})
arr_new.push({x:item,})
} )