const deal  =(date , curren_date)=>{

    var date = date;

    var curren_date = curren_date;
    console.log('日志',Number(curren_date)-Number(date));
    if(Number(curren_date.slice(4,6))<3){
    if(Number(curren_date)-Number(date)<=90 && Number(curren_date)-Number(date)>=0){
       console.log('时间合理');

    }else{
        console.log('时间不合理');

    }   
    }else{
 if(Number(curren_date)-Number(date)<3 && Number(curren_date)-Number(date)>=0){
       console.log('时间合理');

    }else{
        console.log('时间不合理');

    }
 
    }
}
//   输入时间 现在时间 
deal("202203","202202");

    
