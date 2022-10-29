SELECT staff.user_id,c.COMMON_REGION_ID,c.region_name,c.reg_Name,org.org_id,org.ORG_NAME,c.REGION_TYPE  FROM 
 lcdp_ORG_STAFF staff 
RIGHT  join
((
select a.COMMON_REGION_ID,a.region_name as region_name,b.region_name as reg_Name,a.REGION_TYPE from LCDP_COMMON_REGION a 
INNER JOIN LCDP_COMMON_REGION b  on a.PAR_REGION_ID=b.COMMON_REGION_ID
) c LEFT JOIN LCDP_ORG org  ON org.COMMON_REGION_ID = c. COMMON_REGION_ID)
	on staff.org_id= org.org_id  