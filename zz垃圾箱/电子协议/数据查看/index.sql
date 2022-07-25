select
    count(distinct id),
    org_name3,
    org_name4,
    month,
    round(avg(work_hour), 3) as workhour,
    round(avg(sum_work_hour), 1) as avg_sum_work_hour,
    round(sum(sum_work_hour), 1) as allhours,
    sum(timeFlag2) chaoqi,
    sum(timeFlag1) zhengchang,
    round(sum(timeFlag1) * 1.0 /(count(distinct id)), 2) as ss
from
    (
        select
            distinct a.id,
            c.org_name3,
            c.org_name4,
            to_char(a.create_time, 'yyyy-MM') as month,
            (
                select
                    (
                        case
                            when a.expect_resolve_date > b.create_time then 1
                            when a.expect_resolve_date < b.create_time then 0
                        end
                    )
                from
                    lcdp_list_things b
                where
                    b.tace_code = '165a68be-12e0-4ef1-a2ae-f0b87eade4f4'
                    and a.expect_resolve_date > b.create_time
                    and a.id = b.item_id
            ) as timeFlag1,
            (
                select
                    (
                        case
                            when a.expect_resolve_date > b.create_time then 0
                            when a.expect_resolve_date < b.create_time then 1
                        end
                    )
                from
                    lcdp_list_things b
                where
                    b.tace_code = '165a68be-12e0-4ef1-a2ae-f0b87eade4f4'
                    and a.expect_resolve_date < b.create_time
                    and a.id = b.item_id
            ) as timeFlag2,
            (
                select
                    sum(
                        round(
                            cast(
                                date_part('epoch', b.datetime - b.create_time) / 60 / 60 as numeric
                            ),
                            5
                        )
                    )
                from
                    lcdp_list_things b,
                    lcdp_staff_work_job c
                where
                    a.id = b.item_id
                    and (
                        b.tace_code = 'ea2b3972-4409-4ca8-8666-a439c3b4a43f'
                        or b.tace_code = 'dd4acb5d-53ba-437a-9abd-c8bd5c760c90'
                    )
                    and b.deal_user_id = c.staff_id
            ) as work_hour,
            (
                select
                    sum(d.work_hours :: numeric(20, 2))
                from
                    lcdp_work_hours d,
                    lcdp_staff_work_job c
                where
                    a.id = d.work_order_id
                    and c.staff_id = d.creator_id
            ) as sum_work_hour
        from
            lcdp_staff_work a,
            lcdp_staff_work_job c
        where
            a.creator_id = c.staff_id
        group by
            org_name3,
            org_name4,
            month,
            a.id,
            timeFlag2,
            timeFlag1
    ) aa
    
group by
    org_name3,
    org_name4,
    month