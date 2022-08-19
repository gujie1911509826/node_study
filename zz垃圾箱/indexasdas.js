var arr =[
    {
      "created_time": "2022-08-10 00:53:19",
      "updated_time": "2022-08-10 00:55:39",
      "remark": "组织初始化",
      "updator_id": "1",
      "path_code": "1",
      "par_org_id": "-1",
      "status_cd": "00A",
      "children": [
        {
          "created_time": "2022-08-10 00:53:19",
          "updated_time": "2022-08-10 00:55:39",
          "remark": "组织初始化",
          "updator_id": "1",
          "path_code": "1",
          "par_org_id": "516",
          "status_cd": "00A",
          "children": [],
          "org_id": "519",
          "creator_id": "1",
          "status_time": "2022-08-10 00:55:28",
          "org_name": "政企事业部",
          "org_code": "519",
          "tenant_code": "-1"
        },
        {
          "created_time": "2022-08-10 00:53:19",
          "updated_time": "2022-08-10 00:55:39",
          "remark": "组织初始化",
          "updator_id": "1",
          "path_code": "1",
          "par_org_id": "516",
          "status_cd": "00A",
          "children": [],
          "org_id": "520",
          "creator_id": "1",
          "status_time": "2022-08-10 00:55:28",
          "org_name": "规划技术部",
          "org_code": "520",
          "tenant_code": "-1"
        },
        {
          "created_time": "2022-08-10 00:53:19",
          "updated_time": "2022-08-10 00:55:39",
          "remark": "组织初始化",
          "updator_id": "1",
          "path_code": "1",
          "par_org_id": "516",
          "status_cd": "00A",
          "children": [],
          "org_id": "521",
          "creator_id": "1",
          "status_time": "2022-08-10 00:55:28",
          "org_name": "财务部",
          "org_code": "521",
          "tenant_code": "-1"
        },
        {
          "created_time": "2022-08-10 00:53:19",
          "updated_time": "2022-08-10 00:55:39",
          "remark": "组织初始化",
          "updator_id": "1",
          "path_code": "1",
          "par_org_id": "516",
          "status_cd": "00A",
          "children": [],
          "org_id": "530",
          "creator_id": "1",
          "status_time": "2022-08-10 00:55:28",
          "org_name": "业务支撑中心",
          "org_code": "530",
          "tenant_code": "-1"
        }
      ],
      "org_id": "516",
      "creator_id": "1",
      "status_time": "2022-08-10 00:55:28",
      "org_name": "中国移动通信集团甘肃有限公司",
      "org_code": "516",
      "tenant_code": "-1"
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