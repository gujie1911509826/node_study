function gopage(pno,psize){
    let itableEl=document.querySelector(".itable");
    let rowsNumber=itableEl.rows.length;
    let pages=(rowsNumber/psize)>parseInt(rowsNumber/psize)?(parseInt(rowsNumber/psize)+1):parseInt(rowsNumber/psize);
    let startRow=(pno-1)*psize+1;
    let endRow=pno*psize>rowsNumber?rowsNumber:pno*psize;
    let pageBoxEl=document.querySelector(".page");
    for (let i =1 ; i < itableEl.rows.length+1; i++) {
        console.log(i);
        
        if(i>=startRow&&i<=endRow)
        {
            console.log('block');
            
            itableEl.rows[i-1].style.display='block';
        }else{
            console.log('none');
            
            itableEl.rows[i-1].style.display='none';
        }
    }
    let tempStr="当前共"+rowsNumber+"条数据，分"+pages+"页显示，当前在第"+pno+"页";
    if(pno>1){
        tempStr+=`<a href="#" onClick="gopage(`+1+`,`+psize+`)">首页</a><a href="#" onClick="gopage(`+(pno-1)+`,`+psize+`)"><第一页</a>`;
    }else{
        tempStr+=`首页<第一页`;
    }
    if(pno<pages)   
    {
        tempStr+=`<a href="#" onClick="gopage(`+(pno+1)+`,`+psize+`)">下一页></a><a href="#" onClick="gopage(`+pages+`,`+psize+`)">尾页</a>`; 
    }else{
        tempStr+=`第一页>尾页`;
    }
    pageBoxEl.innerHTML=tempStr;
}

window.onload=function(){
    gopage(1,5);
}