
        SELECT
            total,
            a3,
            a4
        from
(
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
                    ) a4,
                    sum(case when (select state from ) in (select ))
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