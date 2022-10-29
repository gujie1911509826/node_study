select
    name,
    soft,
    income,
    return_money,
    cost,
    profit
from
    (
        select
            a.name,
            a.soft,
            a.income,
            a.return_money,
            a.cost,
            a.profit,
            a.tache_code
        from
            LCDP_MANAGE_TASK_DETAIL a,
            zmp_hr.org b
        where
            1 = 1
            and a.org_LEVEL_id = b.org_level_id
            and a.org_id = b.org_id
            and a.org_id = #{org_id}
        union
        select
            '完成率全国排名' as name,
            (
                case
                    when #{org_id} = '402' then '-' else
                    (
                        cast(
                            (
                                select
                                    ranking
                                from
                                    (
                                        select
                                            org_id,
                                            rank() over(
                                                order by
                                                    to_number(replace(soft, '%', '')) desc
                                            ) as ranking
                                        from
                                            LCDP_MANAGE_TASK_DETAIL
                                        where
                                            org_LEVEL_id = a.org_LEVEL_id
                                            AND NAME = '当前完成率'
                                    )
                                where
                                    org_id = a.org_id
                            ) as varchar2(5)
                        )
                    )
                end
            ) as soft,
            (
                case
                    when #{org_id} = '402' then '-' else
                    (
                        cast(
                            (
                                select
                                    ranking
                                from
                                    (
                                        select
                                            org_id,
                                            rank() over(
                                                order by
                                                    to_number(replace(income, '%', '')) desc
                                            ) as ranking
                                        from
                                            LCDP_MANAGE_TASK_DETAIL
                                        where
                                            org_LEVEL_id = a.org_LEVEL_id
                                            AND NAME = '当前完成率'
                                    )
                                where
                                    org_id = a.org_id
                            ) as varchar2(5)
                        )
                    )
                end
            ) as income,
            (
                case
                    when #{org_id} = '402' then '-' else
                    (
                        cast(
                            (
                                select
                                    ranking
                                from
                                    (
                                        select
                                            org_id,
                                            rank() over(
                                                order by
                                                    to_number(replace(return_money, '%', '')) desc
                                            ) as ranking
                                        from
                                            LCDP_MANAGE_TASK_DETAIL
                                        where
                                            org_LEVEL_id = a.org_LEVEL_id
                                            AND NAME = '当前完成率'
                                    )
                                where
                                    org_id = a.org_id
                            ) as varchar2(5)
                        )
                    )
                end
            ) as return_money,
            '' as cost,
            '' as profit,
            8 as tache_code
        from
            LCDP_MANAGE_TASK_DETAIL a,
            zmp_hr.org b
        where
            1 = 1
            and a.org_LEVEL_id = b.org_level_id
            and a.org_id = b.org_id
            and a.org_id = #{org_id} 
            and rownum = 1
    )
order by
    tache_code asc