

var arr = [
    {
        "org_name": "中国移动通信集团甘肃有限公司",
        "org_code": "516",
        "children": [
            {

                "org_name": "政企事业部",
                "org_code": "519",
            },
            {
                "org_name": "规划技术部",
                "org_code": "520",
            },
            {
                "org_name": "财务部",
                "org_code": "521",
            },
            {
                "org_name": "业务支撑中心",
                "org_code": "530",
            }
        ]
    }
]
  var arr2 = ['516','521','520']
var str_arr = [];
 const del =(arr3)=>
  arr3.map((item)=>{
    arr2.map((item2)=>{
        if(item2==item.org_id){
            str_arr.push(item.org_name)
        }
        if(item.children.length>0){            
          del(item.children);
        }
    })
  })
  del(arr);
  newArr =(arr) =>{return arr.filter((item, index, arr) => arr.indexOf(item) === index)}
console.log("test",newArr(str_arr).join());