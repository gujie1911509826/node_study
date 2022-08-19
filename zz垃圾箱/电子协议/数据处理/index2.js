var obj = {
    "custName": "重庆曹操有限公司",
    "custCode": "51034732093",
    "cust_name": "重庆曹操有限公司",
    "addr": "11111111222",
    "tel": "15251847816",
    "customtrade": "未确定",
    "aeId": "1999073",
    "aeName": "李平",
    "aeTel": "15803433335",
    "crmCustId": "1490000004715347",
    "certtype": "43232342234",
    "certno": "43232342234",
    "aeEmail": "13813875924@139.com",
    "is_arrears": "是",
    "is_other_net": "是",
    "is_vnet_user": "是",
    "attention": ""
}
var obj2 = {};
obj2['jsContactZx'] = obj.cust_name||'';
obj2['contactAEmail_js'] = obj.aeEmail ||'';
obj2['lxrphone'] = obj.tel||'';
obj2['managerName'] = obj.aeName||'';
obj2['jsKhjllxdh'] = obj.aeTel||'';
console.log(obj2);


 function main(data, state, success, fail) {
    var obj =  data.assemble_cust_info || {};
    var obj2 = {};
    obj2['jsContactZx'] = obj.cust_name||'';
    obj2['contactAEmail_js'] = obj.aeEmail ||'';
    obj2['lxrphone'] = obj.tel||'';
    obj2['managerName'] = obj.aeName||'';
    obj2['jsKhjllxdh'] = obj.aeTel||'';
    console.log('代码块日志',obj,obj2)
    success(obj2);
    };