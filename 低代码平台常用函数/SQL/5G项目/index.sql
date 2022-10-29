SELECT
    COUNT(*) as total
FROM
    LCDP_MAINORD g
WHERE
    g.CITY_NAME = '南京'


SELECT
    A3,
    total
FROM
    (
        SELECT
            COUNT(*) as total
        FROM
            LCDP_MAINORD g
        WHERE
            g.CITY_NAME = '南京'
    ),
(
        SELECT
            COUNT(*) as A3
        FROM
            LCDP_MAINORD_CUST
        WHERE
            MAIN_ORD_ID in (
                SELECT
                    MAIN_ORD_ID
                FROM
                    LCDP_MAINORD g
                WHERE
                    g.CITY_NAME = '南京'
            )
            AND upf_Construction = 'A3'
        GROUP BY
            upf_Construction
    )

    
SELECT
    COUNT(*) as A3
FROM
    LCDP_MAINORD_CUST
WHERE
    MAIN_ORD_ID in (
        SELECT
            MAIN_ORD_ID
        FROM
            LCDP_MAINORD g
        WHERE
            g.CITY_NAME = '南京'
    )
    AND upf_Construction = 'A3'
GROUP BY
    upf_Construction