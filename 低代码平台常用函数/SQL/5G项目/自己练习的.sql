select CITY_NAME,COUNT(*),case when  THEN  from LCDP_MAINORD lm where 1=1  GROUP  BY CITY_NAME
SELECT MAIN_ORD_ID  FROM  LCDP_MAINORD g WHERE g.CITY_NAME='南京'

select * from LCDP_MAINORD_CUST where  upf_Construction='A3' 

select * from LCDP_MAINORD_CUST where 1=1 AND upf_Construction='A4' 


 (work_order_id)
 
  MAIN_ORD_ID=10337 
	
	
	select *  from LCDP_MAINORD 
	
	SELECT * FROM lcdp_order_work
	
	
	
	SELECT 
pro,
COUNT(g.pro) as total,
sum(CASE  WHEN id_info='A3' THEN 1 ELSE 0 END) as A1,
sum(CASE  WHEN id_info='A4' THEN 1 ELSE 0 END) AS A2,
sum(CASE  WHEN trace_code='2' THEN 1 ELSE 0 END) AS tracde_code,
sum(CASE  WHEN ='2' THEN 1 ELSE 0 END) AS tracde_code,
FROM  LCDP_MAINORD g WHERE g.PROV_NAME='南京' GROUP BY pro
-- 总数
SELECT COUNT(*) as total  FROM  LCDP_MAINORD g WHERE g.CITY_NAME='南京'
-- a3 total 
SELECT A3,total FROM (SELECT COUNT(*) as total  FROM  LCDP_MAINORD g WHERE g.CITY_NAME='南京'),(SELECT COUNT(*) as A3 FROM LCDP_MAINORD_CUST WHERE MAIN_ORD_ID in (SELECT MAIN_ORD_ID  FROM  LCDP_MAINORD g WHERE g.CITY_NAME='南京')  AND upf_Construction='A3' GROUP BY upf_Construction)
--  a3
SELECT COUNT(*) as A3 FROM LCDP_MAINORD_CUST WHERE MAIN_ORD_ID in (SELECT MAIN_ORD_ID  FROM  LCDP_MAINORD g WHERE g.CITY_NAME='南京')  AND upf_Construction='A3' GROUP BY upf_Construction
-- 练习总重结果

SELECT count(g_cust.MAIN_ORD_ID) total, sum(case when upf_Construction='A3' THEN 1 else 0 end) a3,sum(case when upf_Construction='A4' THEN 1 else 0 end) a4 FROM LCDP_MAINORD_CUST g_cust WHERE MAIN_ORD_ID in (SELECT MAIN_ORD_ID  FROM  LCDP_MAINORD g WHERE g.CITY_NAME='南京')  
-- A3
SELECT  count(*) FROM LCDP_MAINORD_CUST WHERE MAIN_ORD_ID in (SELECT MAIN_ORD_ID  FROM  LCDP_MAINORD g WHERE g.CITY_NAME='南京') AND upf_Construction='A3' 

-- A4
SELECT  count(*) FROM LCDP_MAINORD_CUST WHERE MAIN_ORD_ID in (SELECT MAIN_ORD_ID  FROM  LCDP_MAINORD g WHERE g.CITY_NAME='南京') AND upf_Construction='A4' 
-- 关联 获取是启动环节的数字
SELECT c.WORK_ORDER_ID as  start_num FROM LCDP_MAINORD a, LCDP_MAINORD_CUST b,LCDP_ORDER_WORK_ITEM c 
WHERE a.MAIN_ORD_ID = b.MAIN_ORD_ID AND a.MAIN_ORD_ID = c.WORK_ORDER_ID  and c.TRACE_CODE='e76be65d-3444-47e4-b872-7d6c1825ecab' and c.state =0

-- 工单中所有环节中当前环节为启动环节的
SELECT * FROM LCDP_ORDER_WORK_ITEM c 
WHERE c.TRACE_CODE='e76be65d-3444-47e4-b872-7d6c1825ecab' and c.state =0

-- 拼凑的最终结果
SELECT total , a3 ,a4 ,(SELECT count(c.WORK_ORDER_ID) FROM LCDP_MAINORD a, LCDP_MAINORD_CUST b,LCDP_ORDER_WORK_ITEM c WHERE a.MAIN_ORD_ID = b.MAIN_ORD_ID AND a.MAIN_ORD_ID = c.WORK_ORDER_ID  and c.TRACE_CODE='e76be65d-3444-47e4-b872-7d6c1825ecab' and c.state =0) start_num from(
SELECT count(g_cust.MAIN_ORD_ID) total, sum(case when upf_Construction='A3' THEN 1 else 0 end) a3,sum(case when upf_Construction='A4' THEN 1 else 0 end) a4 FROM LCDP_MAINORD_CUST g_cust WHERE MAIN_ORD_ID in (SELECT MAIN_ORD_ID  FROM  LCDP_MAINORD g WHERE g.CITY_NAME='南京')) 

-- 拼凑的最终结果(优化)
SELECT total from 
(SELECT name,total , a3 ,a4  from(
SELECT g_cust.CITY_NAME name,count(g_cust.MAIN_ORD_ID) total, sum(case when upf_Construction='A3' THEN 1 else 0 end) a3,sum(case when upf_Construction='A4' THEN 1 else 0 end) a4 FROM LCDP_MAINORD_CUST g_cust WHERE  g_cust.MAIN_ORD_ID in (SELECT MAIN_ORD_ID  FROM  LCDP_MAINORD g WHERE g.CITY_NAME='南京')) ) GROUP BY CITY_NAME


a5719eb4-a898-4b71-86d1-c234ba66090d


-- 环节添加筛选 
SELECT sum(case when c.TRACE_CODE='e76be65d-3444-47e4-b872-7d6c1825ecab' THEN 1 ELSE 0 END) start_num,sum(case when c.TRACE_CODE='a5719eb4-a898-4b71-86d1-c234ba66090d' THEN 1 ELSE 0 END) work_info_num FROM LCDP_MAINORD a, LCDP_MAINORD_CUST b,LCDP_ORDER_WORK_ITEM c WHERE a.MAIN_ORD_ID = b.MAIN_ORD_ID AND a.MAIN_ORD_ID = c.WORK_ORDER_ID and c.state =0 and a.MAIN_ORD_ID in (SELECT MAIN_ORD_ID  FROM  LCDP_MAINORD g WHERE g.CITY_NAME='南京')

-- 最终结果
        SELECT
            total,
            a3,
            a4,
						num1,
						num2,
						num3,
						end_num
        from
(
                SELECT
                    count(g_cust.MAIN_ORD_ID) total,
										sum(case when (SELECT COUNT(*) from LCDP_MAINORD  ld where ld.MAIN_ORD_ID = g_cust.MAIN_ORD_ID AND ld.ORD_STATUS='3')=1 THEN 1 ELSE 0 END) end_num,
                    sum(
                        case
                            when upf_Construction = 'A3' THEN 1
                            else 0
                        end
                    ) a3,
                    sum(
                        case
                            when upf_Construction = 'A4' THEN 1
                            else 0
                        end
                    ) a4,
                    sum(case when (select COUNT(*) from LCDP_MAINORD a, LCDP_MAINORD_CUST b,LCDP_ORDER_WORK_ITEM c WHERE a.MAIN_ORD_ID = b.MAIN_ORD_ID AND a.MAIN_ORD_ID = c.WORK_ORDER_ID and c.state =0 and c.TRACE_CODE='o）7fa20fcf-983d-4abf-b9e7-a3e66eeebc3a' and c.WORK_ORDER_ID = g_cust.MAIN_ORD_ID )=1 THEN 1 ELSE 0 END) num1,
										 sum(case when (select COUNT(*) from LCDP_MAINORD a, LCDP_MAINORD_CUST b,LCDP_ORDER_WORK_ITEM c WHERE a.MAIN_ORD_ID = b.MAIN_ORD_ID AND a.MAIN_ORD_ID = c.WORK_ORDER_ID and c.state =0 and c.TRACE_CODE='e76be65d-3444-47e4-b872-7d6c1825ecab' and c.WORK_ORDER_ID = g_cust.MAIN_ORD_ID )=1 THEN 1 ELSE 0 END) num2,sum(case when (select COUNT(*) from LCDP_MAINORD a, LCDP_MAINORD_CUST b,LCDP_ORDER_WORK_ITEM c WHERE a.MAIN_ORD_ID = b.MAIN_ORD_ID AND a.MAIN_ORD_ID = c.WORK_ORDER_ID and c.state =0 and c.TRACE_CODE='a5719eb4-a898-4b71-86d1-c234ba66090d' and c.WORK_ORDER_ID = g_cust.MAIN_ORD_ID )=1 THEN 1 ELSE 0 END) num3
                FROM
                    LCDP_MAINORD_CUST g_cust
                WHERE
                    g_cust.MAIN_ORD_ID in (
                        SELECT
                            MAIN_ORD_ID
                        FROM
                            LCDP_MAINORD g
                        WHERE
                            g.CITY_NAME = '南京'
                    )
            )
		
SELECT * from LCDP_TACHE_CFG
--end  
SELECT COUNT(*) from LCDP_MAINORD  ld where ld.ORD_STATUS='3'  

--Oracle中两个日期相差天数--
select TO_NUMBER(TO_DATE(CREATED_TIME,'yyyy-mm-dd hh24:mi:ss')- TO_DATE(UPDATE_TIME,'yyyy-mm-dd hh24:mi:ss'))
AS 相差天数 from LCDP_ORDER_WORK;

SELECT *  from LCDP_ORDER_WORK
						
SELECT c.WORK_ORDER_ID FROM LCDP_MAINORD a, LCDP_MAINORD_CUST b,LCDP_ORDER_WORK_ITEM c WHERE a.MAIN_ORD_ID = b.MAIN_ORD_ID AND a.MAIN_ORD_ID = c.WORK_ORDER_ID and c.state =0


SELECT a.MAIN_ORD_ID, a.city_name,b.UPF_CONSTRUCTION FROM LCDP_MAINORD a, LCDP_MAINORD_CUST b WHERE a.MAIN_ORD_ID = b.MAIN_ORD_ID 

GROUP BY upf_Construction

SELECT 
CASE WHEN 1=1 THEN '南京' ELSE  
CASE WHEN 1=1 THEN '南京2' ELSE '0'  
END  'asa' FROM dual

GROUP BY 
select * from LCDP_MAINORD a ,LCDP_MAINORD_CUST b where a.MAIN_ORD_ID=b.MAIN_ORD_ID; 	 

SELECT  WORK_ID,WORK_ORDER_ID from LCDP_ORDER_WORK 
 GROUP BY WORK_ORDER_ID 
 
 
 
select total, a3 ,a4 ,( SELECT  count(*)  FROM LCDP_MAINORD a, LCDP_MAINORD_CUST b,LCDP_ORDER_WORK_ITEM c 
WHERE a.MAIN_ORD_ID = b.MAIN_ORD_ID AND a.MAIN_ORD_ID = c.WORK_ORDER_ID  and c.TRACE_CODE='e76be65d-3444-47e4-b872-7d6c1825ecab' and c.state =0)start_num from (
SELECT
    count(g_cust.MAIN_ORD_ID) total,
    sum(
        case
            when upf_Construction = 'A3' THEN 1	
            else 0
        end
    ) a3,
    sum(
        case
            when upf_Construction = 'A4' THEN 1
            else 0
        end
    ) a4
FROM
    LCDP_MAINORD_CUST g_cust

WHERE
    MAIN_ORD_ID in (
        SELECT
            MAIN_ORD_ID
        FROM
            LCDP_MAINORD g
        WHERE
            g.CITY_NAME = '南京'
    )

)

-- 计算时间差
SELECT UPDATED_TIME,CREATED_TIME,ROUND(TO_NUMBER(UPDATED_TIME - CREATED_TIME))  FROM LCDP_ORDER_WORK_ITEM;

--  测试最后的实现自动分组

        SELECT
            total,
            a3,
            a4,
						num1,
						num2,
						num3,
						end_num
        from
(
                SELECT
								    g_cust.CITY_NAME,
                    count(g_cust.MAIN_ORD_ID) total,
										sum(case when (SELECT COUNT(*) from LCDP_MAINORD  ld where ld.MAIN_ORD_ID = g_cust.MAIN_ORD_ID AND ld.ORD_STATUS='3')=1 THEN 1 ELSE 0 END) end_num,
                    sum(
                        case
                            when upf_Construction = 'A3' THEN 1
                            else 0
                        end
                    ) a3,
                    sum(
                        case
                            when upf_Construction = 'A4' THEN 1
                            else 0
                        end
                    ) a4,
                    sum(case when (select COUNT(*) from LCDP_MAINORD a, LCDP_MAINORD_CUST b,LCDP_ORDER_WORK_ITEM c WHERE a.MAIN_ORD_ID = b.MAIN_ORD_ID AND a.MAIN_ORD_ID = c.WORK_ORDER_ID and c.state =0 and c.TRACE_CODE='o）7fa20fcf-983d-4abf-b9e7-a3e66eeebc3a' and c.WORK_ORDER_ID = g_cust.MAIN_ORD_ID )=1 THEN 1 ELSE 0 END) num1,
										 sum(case when (select COUNT(*) from LCDP_MAINORD a, LCDP_MAINORD_CUST b,LCDP_ORDER_WORK_ITEM c WHERE a.MAIN_ORD_ID = b.MAIN_ORD_ID AND a.MAIN_ORD_ID = c.WORK_ORDER_ID and c.state =0 and c.TRACE_CODE='e76be65d-3444-47e4-b872-7d6c1825ecab' and c.WORK_ORDER_ID = g_cust.MAIN_ORD_ID )=1 THEN 1 ELSE 0 END) num2,sum(case when (select COUNT(*) from LCDP_MAINORD a, LCDP_MAINORD_CUST b,LCDP_ORDER_WORK_ITEM c WHERE a.MAIN_ORD_ID = b.MAIN_ORD_ID AND a.MAIN_ORD_ID = c.WORK_ORDER_ID and c.state =0 and c.TRACE_CODE='a5719eb4-a898-4b71-86d1-c234ba66090d' and c.WORK_ORDER_ID = g_cust.MAIN_ORD_ID )=1 THEN 1 ELSE 0 END) num3
                FROM
                    LCDP_MAINORD_CUST g_cust
                WHERE
                    g_cust.MAIN_ORD_ID in (
                        SELECT
                            MAIN_ORD_ID
                        FROM
                            LCDP_MAINORD g
                        WHERE
                            g.CITY_NAME = '南京'
                    )
            )
						
						
						            SELECT
                            CITY_NAME
                        FROM
                            LCDP_MAINORD
                        WHERE
												1=1 and
                          GROUP BY CITY_NAME
													ORDER BY CITY_NAME
								