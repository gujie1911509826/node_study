
select USER_ID, USER_NAME, USER_CODE
from BASICC_BFM_USER
where USER_ID not in (
    select bbur.USER_ID
    from BASICC_BFM_USER_ROLE bbur
    where ROLE_ID = #{roleId}
)


select bbur.ROLE_ID,bbur.ROLE_NAME from BASICC_BFM_USER_ROLE bbur   where USER_ID = #{USER_ID}