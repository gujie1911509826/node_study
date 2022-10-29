select
bbr.role_code,
bbr.role_name,
bbu.user_name,
bbu.user_code,
bbu.user_id,
bbu.email,
bbu.phone,
bbu.pwd,
bbu.address,
bbu.user_type
from basicc_bfm_user bbu
    left join basicc_bfm_user_role bbur on bbu.user_id = bbur.user_id
left join basicc_bfm_role bbr on bbr.role_id = bbur.role_id
 where bbr.role_code = #{role_code} and bbu.user_name like '%'|| #{user_name}||'%'



组织信息  人员  人员组织
select bbs.user_id,bbo.org_name from basicc_bfm_org bbo,basicc_bfm_staff bbs,basicc_bfm_staff_org  bbso
where  bbo.org_id = bbso.org_id and bbs.user_id = bbso.staff_id


701