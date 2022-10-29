 select ld.CITY_NAME,

     count(CITY_NAME) total,

     sum((select count(upf_Construction) A3 from LCDP_MAINORD_CUST lmc where upf_Construction is not null and upf_Construction ='A3' and lmc.MAIN_ORD_ID = ld.MAIN_ORD_ID)) a3,

     sum((select count(upf_Construction) A4 from LCDP_MAINORD_CUST lmc where upf_Construction is not null and upf_Construction ='A4' and lmc.MAIN_ORD_ID = ld.MAIN_ORD_ID)) a4,

     sum((select count(1) from LCDP_ORDER_WORK_ITEM lwi where TRACE_CODE ='7fa20fcf-983d-4abf-b9e7-a3e66eeebc3a' and AUDIT_STATE = 0 and STATE = 0 and lwi.WORK_ORDER_ID = ld.MAIN_ORD_ID)) qd,

     sum((select count(1) from LCDP_ORDER_WORK_ITEM lwi where TRACE_CODE ='e76be65d-3444-47e4-b872-7d6c1825ecab' and AUDIT_STATE = 0 and STATE = 0 and lwi.WORK_ORDER_ID = ld.MAIN_ORD_ID)) zb,

     sum((select count(1) from LCDP_ORDER_WORK_ITEM lwi where TRACE_CODE ='a5719eb4-a898-4b71-86d1-c234ba66090d' and AUDIT_STATE = 0 and STATE = 0 and lwi.WORK_ORDER_ID = ld.MAIN_ORD_ID)) yw,

     sum((select count(1) from (select distinct WORK_ORDER_ID from lcdp_order_work where WORK_STATUS = 2 and WORK_ORDER_TYPE='ETE_MAIN') low where low.work_order_id =ld.MAIN_ORD_ID)) wc,

     sum((select TRUNC(avg(xcts), 3) from (

     select TO_NUMBER(TO_DATE(TO_CHAR(b.UPDATED_TIME, 'yyyy-mm-dd hh24:mi:ss'), 'yyyy-mm-dd hh24:mi:ss')- TO_DATE(TO_CHAR(a.CREATED_TIME, 'yyyy-mm-dd hh24:mi:ss'), 'yyyy-mm-dd hh24:mi:ss'))

     AS xcts from (select CREATED_TIME, WORK_ID, WORK_ORDER_ID from (select row_number() over (partition by WORK_ORDER_ID order by CREATED_TIME asc) rn, WORK_ID, WORK_ORDER_ID, CREATED_TIME from LCDP_ORDER_WORK_ITEM aa where aa.TRACE_CODE = 'ea982dc2-c184-42e9-883d-3ac3a0749c00' and aa.STATE = 1) asa where rn = 1

     and asa.WORK_ORDER_ID = ld.MAIN_ORD_ID) a, (select UPDATED_TIME, WORK_ID, WORK_ORDER_ID from (select row_number() over (partition by WORK_ORDER_ID order by UPDATED_TIME desc) rn, WORK_ID, WORK_ORDER_ID, UPDATED_TIME from LCDP_ORDER_WORK_ITEM bb where bb.TRACE_CODE = 'ea982dc2-c184-42e9-883d-3ac3a0749c00' and bb.UPDATED_TIME is not null and bb.STATE = 1) bas where rn = 1

     and bas.WORK_ORDER_ID = ld.MAIN_ORD_ID) b where a.WORK_ORDER_ID = b.WORK_ORDER_ID))) xcsg,



   sum((select sum(ddd) cs from (

select case when TO_NUMBER(TO_DATE(TO_CHAR(c.UPDATED_TIME, 'yyyy-mm-dd hh24:mi:ss'), 'yyyy-mm-dd hh24:mi:ss')- TO_DATE(TO_CHAR(d.CREATED_TIME, 'yyyy-mm-dd hh24:mi:ss'), 'yyyy-mm-dd hh24:mi:ss'))>4 then 1 else 0 end ddd from

(select WORK_ORDER_ID,case when state=0 then sysdate else UPDATED_TIME end UPDATED_TIME from (select row_number() over (partition by WORK_ORDER_ID order by UPDATED_TIME desc) rn,state,UPDATED_TIME,WORK_ORDER_ID from LCDP_ORDER_WORK_ITEM where  TRACE_CODE = 'c927bd39-0869-4547-9820-0f2d76ae57d5')  sss where rn = 1 and sss.WORK_ORDER_ID = ld.MAIN_ORD_ID) c,

(select CREATED_TIME,WORK_ORDER_ID from (select row_number() over (partition by WORK_ORDER_ID order by CREATED_TIME asc) rn,state,CREATED_TIME,WORK_ORDER_ID from LCDP_ORDER_WORK_ITEM where  TRACE_CODE = 'c927bd39-0869-4547-9820-0f2d76ae57d5')  sts where rn = 1 and sts.WORK_ORDER_ID=ld.MAIN_ORD_ID)d

where c.WORK_ORDER_ID= d.WORK_ORDER_ID))) cs,



sum((

select TRUNC(avg(xcts), 3) from (

select xcts from (

     select TO_NUMBER(TO_DATE(TO_CHAR(b.UPDATED_TIME, 'yyyy-mm-dd hh24:mi:ss'), 'yyyy-mm-dd hh24:mi:ss')- TO_DATE(TO_CHAR(a.CREATED_TIME, 'yyyy-mm-dd hh24:mi:ss'), 'yyyy-mm-dd hh24:mi:ss'))

     AS xcts from (select CREATED_TIME, WORK_ID, WORK_ORDER_ID from (select row_number() over (partition by WORK_ORDER_ID order by CREATED_TIME asc) rn, WORK_ID, WORK_ORDER_ID, CREATED_TIME from LCDP_ORDER_WORK_ITEM aa where aa.TRACE_CODE = 'fd10abd6-8e91-492c-9383-1e21af72c6ca' and aa.TRACE_name= 'UPF精方案提交、审批' and aa.STATE = 1) asa where rn = 1

     and asa.WORK_ORDER_ID = ld.MAIN_ORD_ID) a, (select UPDATED_TIME, WORK_ID, WORK_ORDER_ID from (select row_number() over (partition by WORK_ORDER_ID order by UPDATED_TIME desc) rn, WORK_ID, WORK_ORDER_ID, UPDATED_TIME from LCDP_ORDER_WORK_ITEM bb where bb.TRACE_CODE = 'fd10abd6-8e91-492c-9383-1e21af72c6ca' and bb.UPDATED_TIME is not null and bb.STATE = 1) bas where rn = 1

     and bas.WORK_ORDER_ID = ld.MAIN_ORD_ID) b where a.WORK_ORDER_ID = b.WORK_ORDER_ID) upf



UNION ALL



 select xcts from (

     select TO_NUMBER(TO_DATE(TO_CHAR(b.UPDATED_TIME, 'yyyy-mm-dd hh24:mi:ss'), 'yyyy-mm-dd hh24:mi:ss')- TO_DATE(TO_CHAR(a.CREATED_TIME, 'yyyy-mm-dd hh24:mi:ss'), 'yyyy-mm-dd hh24:mi:ss'))

     AS xcts from (select CREATED_TIME, WORK_ID, WORK_ORDER_ID from (select row_number() over (partition by WORK_ORDER_ID order by CREATED_TIME asc) rn, WORK_ID, WORK_ORDER_ID, CREATED_TIME from LCDP_ORDER_WORK_ITEM aa where aa.TRACE_CODE = 'fd10abd6-8e91-492c-9383-1e21af72c6ca' and aa.TRACE_name= 'UPF精方案提交' and aa.STATE = 1) asa where rn = 1

     and asa.WORK_ORDER_ID = ld.MAIN_ORD_ID) a, (select UPDATED_TIME, WORK_ID, WORK_ORDER_ID from (select row_number() over (partition by WORK_ORDER_ID order by UPDATED_TIME desc) rn, WORK_ID, WORK_ORDER_ID, UPDATED_TIME from LCDP_ORDER_WORK_ITEM bb where bb.TRACE_CODE = 'a0152b83-91f9-411c-b476-4ab04ad3984b' and bb.UPDATED_TIME is not null and bb.STATE = 1) bas where rn = 1

     and bas.WORK_ORDER_ID = ld.MAIN_ORD_ID) b where a.WORK_ORDER_ID = b.WORK_ORDER_ID) ggggg



))) upf1,



sum(( select  sum(ddd) cs from (



select ddd from (

select case when TO_NUMBER(TO_DATE(TO_CHAR(c.UPDATED_TIME, 'yyyy-mm-dd hh24:mi:ss'), 'yyyy-mm-dd hh24:mi:ss')- TO_DATE(TO_CHAR(d.CREATED_TIME, 'yyyy-mm-dd hh24:mi:ss'), 'yyyy-mm-dd hh24:mi:ss'))>1 then 1 else 0 end ddd from

(select WORK_ORDER_ID,case when state=0 then sysdate else UPDATED_TIME end UPDATED_TIME from (select row_number() over (partition by WORK_ORDER_ID order by UPDATED_TIME desc) rn,state,UPDATED_TIME,WORK_ORDER_ID from LCDP_ORDER_WORK_ITEM where  TRACE_CODE = 'fd10abd6-8e91-492c-9383-1e21af72c6ca' and TRACE_name= 'UPF精方案提交、审批')  sss where rn = 1 and sss.WORK_ORDER_ID = ld.MAIN_ORD_ID) c,

(select CREATED_TIME,WORK_ORDER_ID from (select row_number() over (partition by WORK_ORDER_ID order by CREATED_TIME asc) rn,state,CREATED_TIME,WORK_ORDER_ID from LCDP_ORDER_WORK_ITEM where  TRACE_CODE = 'fd10abd6-8e91-492c-9383-1e21af72c6ca' and TRACE_name= 'UPF精方案提交、审批')  sts where rn = 1 and sts.WORK_ORDER_ID=ld.MAIN_ORD_ID)d

where c.WORK_ORDER_ID= d.WORK_ORDER_ID) upfcs1



UNION ALL



select ddd from (

select case when TO_NUMBER(TO_DATE(TO_CHAR(c.UPDATED_TIME, 'yyyy-mm-dd hh24:mi:ss'), 'yyyy-mm-dd hh24:mi:ss')- TO_DATE(TO_CHAR(d.CREATED_TIME, 'yyyy-mm-dd hh24:mi:ss'), 'yyyy-mm-dd hh24:mi:ss'))>1 then 1 else 0 end ddd from

(select WORK_ORDER_ID,case when state=0 then sysdate else UPDATED_TIME end UPDATED_TIME from (select row_number() over (partition by WORK_ORDER_ID order by UPDATED_TIME desc) rn,state,UPDATED_TIME,WORK_ORDER_ID from LCDP_ORDER_WORK_ITEM where  TRACE_CODE = 'a0152b83-91f9-411c-b476-4ab04ad3984b'and UPDATED_TIME is not null)  sss where rn = 1 and sss.WORK_ORDER_ID = ld.MAIN_ORD_ID) c,

(select CREATED_TIME,WORK_ORDER_ID from (select row_number() over (partition by WORK_ORDER_ID order by CREATED_TIME asc) rn,state,CREATED_TIME,WORK_ORDER_ID from LCDP_ORDER_WORK_ITEM where  TRACE_CODE = 'fd10abd6-8e91-492c-9383-1e21af72c6ca' and TRACE_name= 'UPF精方案提交')  sts where rn = 1 and sts.WORK_ORDER_ID=ld.MAIN_ORD_ID)d

where c.WORK_ORDER_ID= d.WORK_ORDER_ID) upfcs2



))) upfcs,



 sum((select TRUNC(avg(xcts), 3) from

           (select TO_NUMBER(TO_DATE(TO_CHAR(b.UPDATED_TIME, 'yyyy-mm-dd hh24:mi:ss'), 'yyyy-mm-dd hh24:mi:ss')- TO_DATE(TO_CHAR(a.CREATED_TIME, 'yyyy-mm-dd hh24:mi:ss'), 'yyyy-mm-dd hh24:mi:ss')) AS xcts from

           (select CREATED_TIME, WORK_ID, WORK_ORDER_ID from

           (select row_number() over (partition by WORK_ORDER_ID order by CREATED_TIME asc) rn, WORK_ID, WORK_ORDER_ID, CREATED_TIME from

           LCDP_ORDER_WORK_ITEM aa where aa.TRACE_CODE = 'acb02a5f-64e2-4b47-9428-4c8ebd2e2378' and aa.STATE = 1) asa

           where rn = 1     and asa.WORK_ORDER_ID = ld.MAIN_ORD_ID) a, (select UPDATED_TIME, WORK_ID, WORK_ORDER_ID from

           (select row_number() over (partition by WORK_ORDER_ID order by UPDATED_TIME desc) rn, WORK_ID, WORK_ORDER_ID, UPDATED_TIME from

           LCDP_ORDER_WORK_ITEM bb where bb.TRACE_CODE = 'acb02a5f-64e2-4b47-9428-4c8ebd2e2378' and bb.UPDATED_TIME is not null and bb.STATE = 1) bas

           where rn = 1 and bas.WORK_ORDER_ID = ld.MAIN_ORD_ID) b where a.WORK_ORDER_ID = b.WORK_ORDER_ID))) sjhsavg,
           
 sum((select sum(ddd) cs from (

select case when TO_NUMBER(TO_DATE(TO_CHAR(c.UPDATED_TIME, 'yyyy-mm-dd hh24:mi:ss'), 'yyyy-mm-dd hh24:mi:ss')- TO_DATE(TO_CHAR(d.CREATED_TIME, 'yyyy-mm-dd hh24:mi:ss'), 'yyyy-mm-dd hh24:mi:ss'))>2 then 1 else 0 end ddd from

(select WORK_ORDER_ID,case when state=0 then sysdate else UPDATED_TIME end UPDATED_TIME from (select row_number() over (partition by WORK_ORDER_ID order by UPDATED_TIME desc) rn,state,UPDATED_TIME,WORK_ORDER_ID from LCDP_ORDER_WORK_ITEM where  TRACE_CODE = 'acb02a5f-64e2-4b47-9428-4c8ebd2e2378')  sss where rn = 1 and sss.WORK_ORDER_ID = ld.MAIN_ORD_ID) c,

(select CREATED_TIME,WORK_ORDER_ID from (select row_number() over (partition by WORK_ORDER_ID order by CREATED_TIME asc) rn,state,CREATED_TIME,WORK_ORDER_ID from LCDP_ORDER_WORK_ITEM where  TRACE_CODE = 'acb02a5f-64e2-4b47-9428-4c8ebd2e2378')  sts where rn = 1 and sts.WORK_ORDER_ID=ld.MAIN_ORD_ID)d

where c.WORK_ORDER_ID= d.WORK_ORDER_ID))) sjhs

 from LCDP_MAINORD ld

 where 1=1



     <if test=" city_name != null and city_name !='' and city_name!='全省'">

         and ld.CITY_NAME = #{city_name}

    </if>
  <if test="created_time_begin !=null and created_time_begin !=''">
            and   ld.CREATED_DATE >= to_date(#{created_time_begin},'YYYY-MM-DD HH24:MI:SS')
        </if>
       <if test="created_time_end !=null and created_time_end !=''">
            and   ld.CREATED_DATE <=to_date(#{created_time_end},'YYYY-MM-DD HH24:MI:SS')
        </if>



 group by CITY_NAME;