
select total, a3 ,a4 ,( SELECT  count(*)  FROM LCDP_MAINORD a, LCDP_MAINORD_CUST b,LCDP_ORDER_WORK_ITEM c 
WHERE a.MAIN_ORD_ID = b.MAIN_ORD_ID AND a.MAIN_ORD_ID = c.WORK_ORDER_ID  and c.TRACE_CODE='7fa20fcf-983d-4abf-b9e7-a3e66eeebc3a' and c.state =0)start_num from (
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