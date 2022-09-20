SELECT
  COUNT (DISTINCT ID) AS alls,
  org_name3,
  org_name4,
  MONTHa,
  round(AVG(work_hour), 3) AS workhour,
  round(AVG(sum_work_hour), 1) AS avg_sum_work_hour,
  round(SUM(sum_work_hour), 1) AS allhours,
  SUM(timeFlag2) chaoqi,
  SUM(timeFlag1) zhengchang,
  SUM(timeFlag3) zaitugonhdan,
  SUM(timeFlag4) zaituchaoqi,
  SUM(timeFlag5) dangyuechulishu,
  round(SUM(timeFlag1) * 1.0 / (COUNT(DISTINCT ID)), 2) AS ss
FROM
  (
    SELECT
      DISTINCT A.ID,
      C.org_name3,
      C.org_name4,
      to_char(A.create_time, 'yyyy-MM') AS MONTHa,
      (
        SELECT
          (
            CASE
              WHEN A.expect_resolve_date > b.create_time THEN 1
              WHEN A.expect_resolve_date < b.create_time THEN 0
            END
          )
        FROM
          lcdp_list_things b
        WHERE
          b.tace_code = '165a68be-12e0-4ef1-a2ae-f0b87eade4f4'
          AND A.expect_resolve_date > b.create_time
          AND A.ID = b.item_id
      ) AS timeFlag1,
      (
        SELECT
          (
            CASE
              WHEN A.expect_resolve_date > b.create_time THEN 0
              WHEN A.expect_resolve_date < b.create_time THEN 1
            END
          )
        FROM
          lcdp_list_things b
        WHERE
          b.tace_code = '165a68be-12e0-4ef1-a2ae-f0b87eade4f4'
          AND A.expect_resolve_date < b.create_time
          AND A.ID = b.item_id
      ) AS timeFlag2,
      (
        SELECT
          (
            CASE
              WHEN b.state = 1 THEN 0
              WHEN b.state = 0 THEN 1
            END
          )
        FROM
          lcdp_list_things b
        WHERE
          b.tace_code = 'ea2b3972-4409-4ca8-8666-a439c3b4a43f'
          AND b.state = 0
          AND A.ID = b.item_id
      ) AS timeFlag3,
      (
        SELECT
          (
            CASE
              WHEN A.expect_resolve_date < b.create_time THEN 1
              WHEN A.expect_resolve_date > b.create_time THEN 0
            END
          )
        FROM
          lcdp_list_things b
        WHERE
          b.tace_code = 'ea2b3972-4409-4ca8-8666-a439c3b4a43f'
          AND b.state = 0
          AND A.ID = b.item_id
      ) AS timeFlag4,
      (
        SELECT
          (
            CASE
              WHEN b.state = 1 THEN 1
              WHEN b.state = 0 THEN 0
            END
          )
        FROM
          lcdp_list_things b
        WHERE
          b.tace_code = '165a68be-12e0-4ef1-a2ae-f0b87eade4f4'
          AND A.ID = b.item_id
      ) AS timeFlag5,
      (
        SELECT
          SUM (
            round(
              CAST(
                date_part('epoch', b.datetime - b.create_time) / 60 / 60 AS NUMERIC
              ),
              5
            )
          )
        FROM
          lcdp_list_things b,
          lcdp_staff_work_job C
        WHERE
          A.ID = b.item_id
          AND (
            b.tace_code = 'ea2b3972-4409-4ca8-8666-a439c3b4a43f'
            OR b.tace_code = 'dd4acb5d-53ba-437a-9abd-c8bd5c760c90'
          )
          AND b.deal_user_id = C.staff_id
      ) AS work_hour,
      (
        SELECT
          SUM (d.work_hours :: NUMERIC(20, 2))
        FROM
          lcdp_work_hours d,
          lcdp_staff_work_job C
        WHERE
          A.ID = d.work_order_id
          AND C.staff_id = d.creator_id
      ) AS sum_work_hour
    FROM
      lcdp_staff_work A,
      lcdp_staff_work_job C
    WHERE
      A.creator_id = C.staff_id
    GROUP BY
      org_name3,
      org_name4,
      MONTH,
      A.ID,
      timeFlag2,
      timeFlag1
  ) aa
WHERE
  1 = 1 
  < if test = "month!='' and  month!=null " >
  AND MONTHa >= #{month}
  < / if > < if test = "month1!='' and  month1!=null " >
  AND MONTHa <= #{month1}
  < / if >
GROUP BY
  org_name3,
  org_name4,
  MONTHa