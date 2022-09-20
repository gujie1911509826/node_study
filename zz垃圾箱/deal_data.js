// 已知数组 id  检索name

// 目标数组
const arr_item = [
    {
        "org_name": "中国移动通信集团甘肃有限公司",
        "org_code": "516",
        "children": [
            {

                "org_name": "政企事业部",
                "org_code": "519",
                "children": []
            },
            {
                "org_name": "规划技术部",
                "org_code": "520",
                "children": []
            },
            {
                "org_name": "财务部",
                "org_code": "521",
                "children": []
            },
            {
                "org_name": "业务支撑中心",
                "org_code": "530",
                "children": []
            }
        ]
    }
]
const test = (value) => {
    if (value) {
        var arr = JSON.parse(localStorage.getItem("tree_data")) || [];
        // var arr = arr_item;
        // 入参是 '["5221"]'  字符串的数组 处理为数组格式  ["521"]
        var arr2 = value.slice(2, value.length - 2).replace(/"/g, "").split(",") || [];
        // 定义最终的结果数组
        var str_arr = [];
        //  遍历树的数据与入参数组进行匹对   （可否优化？）
        const delData = (arr_param) => {
            arr_param.map((item) => {
                // str_arr.push(item.org_name)
                if (item.children.length > 0) {
                    delData(item.children);
                }

                arr2.map((item2) => {
                    // 当id一样 将name存储起来
                    if (item2 == item.org_code) {
                        str_arr.push(item.org_name);
                    }
                    // children不为空 递归
                    // if (item.children.length > 0) {
                    //     delData(item.children);
                    // }
                })
            })
        }
        // 执行上面的函数
        delData(arr);
        console.log("日志得到的结果数组", str_arr);
        //数组去重函数
        newArr = (arr) => {
            return arr.filter((item, index, arr) => arr.indexOf(item) === index)
        }
        console.log("去重后的数据", newArr(str_arr));

        return newArr(str_arr).join();
    }
    else {
        return "";
    }

}

test('["519","520"]');