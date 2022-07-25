


-- 主表  短信配置表
CREATE TABLE "APP_9940279783424_DEFAULT_DEV"."SMS_REMINDER_INFO" (
  "INFO_ID" NUMBER(16,0) VISIBLE NOT NULL,  主键
  "CREATOR_ID" NUMBER(16,0) VISIBLE,        
  "CREATE_TIME" DATE VISIBLE,               
  "UPDATOR_ID" NUMBER(16,0) VISIBLE,        
  "UPDATE_TIME" DATE VISIBLE, 
  "REMINDER_TYPE" VARCHAR2(256 BYTE) VISIBLE,   提醒类型
  "REMINDER_TIME" VARCHAR2(256 BYTE) VISIBLE,   提醒时间
  "BEGIN_REMINDER_TIME" VARCHAR2(256 BYTE) VISIBLE,  开始提醒时间
  "END_TEMINDER_TIME" VARCHAR2(256 BYTE) VISIBLE,   结束提醒时间
  "TACHE_CODE" VARCHAR2(256 BYTE) VISIBLE,   环节编码 
  "FLOW_TYPE" VARCHAR2(256 BYTE) VISIBLE,   流程类型
  "AREA_ID" VARCHAR2(256 BYTE) VISIBLE      区域id
)
-- 附表  提醒对象表
"APP_9940279783424_DEFAULT_DEV"."SMS_REMINDER_INFO_OBJCET_ID" (
  "OBJCET_ID" NUMBER(16,0) VISIBLE NOT NULL,   对象id
  "CREATOR_ID" NUMBER(16,0) VISIBLE,
  "CREATE_TIME" DATE VISIBLE,
  "UPDATOR_ID" NUMBER(16,0) VISIBLE,
  "UPDATE_TIME" DATE VISIBLE,
  "REMINDER_INFO_ID" VARCHAR2(256 BYTE) VISIBLE,   主表的外键
  "DEAL_USER_TYPE" VARCHAR2(256 BYTE) VISIBLE,  处理人类型
  "TACHE_CODE" VARCHAR2(256 BYTE) VISIBLE      流程节点编码  
)

select 
ri.INFO_ID,
ri.TACHE_CODE,
ri.FLOW_TYPE,
ri.TACHE_CODE,
ri.REMINDER_TYPE,
ri.REMINDER_TIME,
ri.BEGIN_REMINDER_TIME,
ri.END_TEMINDER_TIME,
io.DEAL_USER_TYPE,
ri.CREATOR_ID,
ri.CREATE_TIME,
ri.UPDATOR_ID,
ri.UPDATE_TIME
from SMS_REMINDER_INFO  ri join SMS_REMINDER_INFO_OBJCET_ID io on ri.INFO_ID=io.REMINDER_INFO_ID


select 
ri.INFO_ID 主键,
ri.TACHE_CODE  环节编码,
ri.FLOW_TYPE 流程类型,
ri.REMINDER_TYPE 提醒类型,
ri.AREA_ID 区域id,
ri.REMINDER_TIME 提醒时间,
ri.BEGIN_REMINDER_TIME 开始提醒时间,
ri.END_TEMINDER_TIME 结束提醒时间,
io.DEAL_USER_TYPE 处理人类型,
ri.CREATOR_ID 创建人id,
(select user_name from basicc_bfm_user where user_id=ri.CREATOR_ID)  创建人,
ri.CREATE_TIME 创建时间,
ri.UPDATOR_ID 修改人id,
(select user_name from basicc_bfm_user where user_id=ri.UPDATOR_ID)  修改人,
ri.UPDATE_TIME 修改时间
from SMS_REMINDER_INFO  ri join SMS_REMINDER_INFO_OBJCET_ID io on ri.INFO_ID=io.REMINDER_INFO_ID


select 
ri.INFO_ID as 主键,
ri.TACHE_CODE as 环节编码,
ri.FLOW_TYPE as 流程类型,
ri.REMINDER_TYPE as 提醒类型,
ri.AREA_ID as 区域id,
ri.REMINDER_TIME as 提醒时间,
ri.BEGIN_REMINDER_TIME as 开始提醒时间,
ri.END_TEMINDER_TIME as 结束提醒时间,
io.DEAL_USER_TYPE as 处理人类型,
ri.CREATOR_ID as 创建人id,
(select user_name from basicc_bfm_user where user_id=ri.CREATOR_ID)as 创建人,
ri.CREATE_TIME as 创建时间,
ri.UPDATOR_ID as 修改人id,
(select user_name from basicc_bfm_user where user_id=ri.UPDATOR_ID) as  修改人,
ri.UPDATE_TIME as 修改时间
from SMS_REMINDER_INFO  ri join SMS_REMINDER_INFO_OBJCET_ID io on ri.INFO_ID=io.REMINDER_INFO_ID


select 
ri.INFO_ID,
ri.TACHE_CODE ,
ri.FLOW_TYPE ,
ri.REMINDER_TYPE,
ri.AREA_ID ,
ri.REMINDER_TIME,
ri.BEGIN_REMINDER_TIME,
ri.END_TEMINDER_TIME ,
io.DEAL_USER_TYPE ,
ri.CREATOR_ID ,
(select user_name from basicc_bfm_user where user_id=ri.CREATOR_ID)as 创建人,
ri.CREATE_TIME ,
ri.UPDATOR_ID ,
(select user_name from basicc_bfm_user where user_id=ri.UPDATOR_ID) as  修改人,
ri.UPDATE_TIME 
from SMS_REMINDER_INFO  ri join SMS_REMINDER_INFO_OBJCET_ID io on ri.INFO_ID=io.REMINDER_INFO_ID




select 
ri.INFO_ID,
ri.TACHE_CODE ,
ri.FLOW_TYPE ,
ri.REMINDER_TYPE,
ri.AREA_ID,
ri.REMINDER_TIME,
ri.BEGIN_REMINDER_TIME,
ri.END_TEMINDER_TIME ,
io.DEAL_USER_TYPE ,
ri.CREATOR_ID ,
(select user_name from basicc_bfm_user where user_id=ri.CREATOR_ID)as CREATOR_NAME,
ri.CREATE_TIME ,
ri.UPDATOR_ID ,
(select user_name from basicc_bfm_user where user_id=ri.UPDATOR_ID) as  UPDATOR_NAME,
ri.UPDATE_TIME 
from SMS_REMINDER_INFO  ri join SMS_REMINDER_INFO_OBJCET_ID io on ri.INFO_ID=io.REMINDER_INFO_ID
where 1=1
<if test="AREA_ID !=null and AREA_ID !='' ">
   and ri.AREA_ID =#{AREA_ID}
 </if>





 
select 
ri.INFO_ID as 主键,
ri.TACHE_CODE as 环节编码,
ri.FLOW_TYPE as 流程类型,
ri.REMINDER_TYPE as 提醒类型,
ri.AREA_ID as 区域id,
ri.REMINDER_TIME as 提醒时间,
ri.BEGIN_REMINDER_TIME as 开始提醒时间,
ri.END_TEMINDER_TIME as 结束提醒时间,
io.DEAL_USER_TYPE as 处理人类型,
ri.CREATOR_ID as 创建人id,
(select user_name from basicc_bfm_user where user_id=ri.CREATOR_ID)as CREATOR_NAME,
ri.CREATE_TIME as 创建时间,
ri.UPDATOR_ID as 修改人id,
(select user_name from basicc_bfm_user where user_id=ri.UPDATOR_ID) as  UPDATOR_NAME,
ri.UPDATE_TIME as 修改时间
from SMS_REMINDER_INFO  ri join SMS_REMINDER_INFO_OBJCET_ID io on ri.INFO_ID=io.REMINDER_INFO_ID
where 1=1
<if test="AREA_ID !=null and AREA_ID !='' ">
   and ri.AREA_ID =#{AREA_ID}
 </if>
 <if test="TACHE_CODE !=null and TACHE_CODE !='' ">
   and ri.TACHE_CODE =#{TACHE_CODE}
 </if>
  <if test="REMINDER_TYPE !=null and REMINDER_TYPE !='' ">
   and ri.REMINDER_TYPE =#{REMINDER_TYPE}
 </if>