SELECT * FROM ggggg

SELECT 
COUNT(g.pro),
sum(CASE  WHEN id_info='A3' THEN 1 ELSE 0 END),
sum(CASE  WHEN id_info='A4' THEN 1 ELSE 0 END) 
FROM  ggggg g WHERE g.pro='南京' GROUP BY pro


SELECT 
g.pro as pro,
CASE  WHEN id_info='A3' THEN 1 ELSE 0 END ,
CASE  WHEN id_info='A4' THEN 1 ELSE 0 END 
FROM  ggggg g WHERE g.pro='南京'

SELECT 
pro,
COUNT(g.pro) as total,
sum(CASE  WHEN id_info='A3' THEN 1 ELSE 0 END) as A1,
sum(CASE  WHEN id_info='A4' THEN 1 ELSE 0 END) AS A2,
sum(CASE  WHEN trace_code='2' THEN 1 ELSE 0 END) AS tracde_code,
sum(CASE  WHEN ='2' THEN 1 ELSE 0 END) AS tracde_code,
FROM  ggggg g WHERE g.pro='南京' GROUP BY pro



to_char(a.create_time,'yyyy-MM')  
TO_CHAR( o.created_time, 'YYYY-MM-DD HH24:MI:SS' ) 
AS work_created_time    
to_date(#{beginDate},'yyyy-MM-dd')