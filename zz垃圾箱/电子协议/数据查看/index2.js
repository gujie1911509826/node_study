var body1 ="[{\"createDate\":\"2020-06-05 00:00:00\",\"groupCode\":\"PAY_INFO_BANK_REGION_19\",\"groupName\":\"无锡收款银行\",\"newEntity\":true,\"paramCode\":\"PAY_INFO_BANK_REGION_19_1\",\"paramName\":\"中国农业银行股份有限公司无锡永乐支行\",\"paramValue\":\"1\",\"sortIdx\":1,\"status\":\"1\",\"statusCd\":\"1\",\"updateDate\":\"2020-06-05 00:00:00\"}]";
var body2 ="[{\"createDate\":\"2020-06-05 00:00:00\",\"groupCode\":\"PAY_INFO_ACCOUNT_NAME_19_1\",\"groupName\":\"无锡收款名称账户\",\"newEntity\":true,\"paramCode\":\"PAY_INFO_ACCOUNT_NAME_19_1_1\",\"paramName\":\"中国移动通信集团江苏有限公司无锡分公司\",\"paramValue\":\"1_1\",\"sortIdx\":1,\"status\":\"1\",\"statusCd\":\"1\",\"updateDate\":\"2020-06-05 00:00:00\"},{\"createDate\":\"2020-06-05 00:00:00\",\"groupCode\":\"PAY_INFO_ACCOUNT_NAME_19_1\",\"groupName\":\"无锡收款名称账户\",\"newEntity\":true,\"paramCode\":\"PAY_INFO_ACCOUNT_NAME_19_1_2\",\"paramName\":\"中国移动通信集团江苏有限公司\",\"paramValue\":\"1_2\",\"sortIdx\":2,\"status\":\"1\",\"statusCd\":\"1\",\"updateDate\":\"2020-06-05 00:00:00\"}]";
var body3 = "{\"receiptOpenAccount\":\"10632601040011349\"}";
let arr1 = JSON.parse(body1);
let arr2 = JSON.parse(body2);
let obj = JSON.parse(body3);
let formData = {};
formData['receiptOpenAccount'] = arr1[0].paramCode || null;
formData['receiptOpenAccountName']=arr2[0].paramCode || unll;
formData['receiptOpenBank'] = obj.receiptOpenAccount;
// console.log(arr1,arr2,obj);
console.log('填充收款信息表单的数据',formData);





var body1 =reply_1457625?.body||[];
var body2 =reply_8686356?.body||[];
var body3 = reply_3192396?.body||{};
let arr1 =Array.isArray(body1)?body1:JSON.parse(body1);
let arr2 = Array.isArray(body2)?body2:JSON.parse(body2);
let obj = (typeof body3=='object')?body3:JSON.parse(body3);
console.log("基础信息日志",typeof obj);
let formData = {};
formData['receiptOpenAccount'] = arr1[0].paramCode || null;
formData['receiptOpenAccountName']=arr2[0].paramCode || null;
formData['receiptOpenBank'] = obj?.receiptOpenAccount||null;
// console.log(arr1,arr2,obj);
console.log('填充收款信息表单的数据',formData);
success(formData);
