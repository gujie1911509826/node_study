var all = {
    "Form_13871_121": {},
    "Form_11": {
        "id": null,
        "creator_id": null,
        "updator_id": null
    },
    "Form_22": {
        "info_id": 4,
        "question": "<p>aaa</p>"
    },
    "Form_44": {}
}
const {Form_22 , Form_33 , Form_44} = all||{}; 
const {info_id , question} = Form_22;
var obj  = {};
obj['info_id'] = info_id;
obj['question'] = question;
if(Form_33){
// 选项数据梳理
 const  {choose} = Form_33.data;
 var str = '';
 Object.keys(choose).forEach(item=>{
 str+=`${item.split('|')[1]}:${choose[item]}|`
  })
  obj['answer'] = str;
}
if(Form_44){
   const { true_answer } =  Form_44||{};
     obj['true_answer'] = true_answer?true_answer.toString():'';
}
console.log('日志',obj);
