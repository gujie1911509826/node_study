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

    
http://10.32.217.33:48642/lcdp-app/app/#/index?appId=874095373215174656

http://10.32.217.33:48642/lcdp-app/app/#/test717as?appId=899849152252801024


http://10.32.217.33:48642/lcdp-app/app/#/caidanshouye1205copy?appId=899849152252801024&

http://10.32.217.33:48642/lcdp-app/app/#/test7171?appId=899849152252801024&

http://10.32.217.33:48642/lcdp-app/app/#/quanwuwifi?appId=874095373215174656&

{
    "roleId": 10097,
    "roleName": "地市管理人员"
},
{
    "roleId": 10098,
    "


    select USER_ID, USER_NAME, USER_CODE
from BASICC_BFM_USER
where USER_ID not in (
    select bbur.USER_ID
    from BASICC_BFM_USER_ROLE bbur
    where ROLE_ID = #{roleId}
)


BASICC_BFM_USER_ROLE


BASICC_BFM_USER

BASICC_BFM_ROLE







select  * from BASICC_BFM_USER_ROLE bbur,BASICC_BFM_ROLE ro   where bbur.user_id = #{user_id} and bbur.role_id = ro.role_id