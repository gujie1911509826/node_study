SELECT
	department,
	 sum(case  when leader='领导1' then score else 0 end ) lead1,
	 sum(case  when leader='领导2' then score else 0 end ) lead2,
	 sum(case  when leader='领导3' then score else 0 end ) lead3,
	 sum(case  when leader='领导4' then score else 0 end ) lead4,
	 sum(case  when leader='领导5' then score else 0 end ) lead5,
	 sum(case  when leader='领导77' then score else 0 end ) lead6,
	 sum(score)
FROM
	lcdp_score 
GROUP BY
	department 
ORDER BY
	department
	