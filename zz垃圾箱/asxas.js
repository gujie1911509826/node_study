arr.forEach(item=>arr.filter(item2=>item==item2).length==1?result.push(item):'')
return result.length>=k?result[k-1]:""

var arr = [];
arr.reduce((pre,cur)=>{arr.filter(item=>item==cur)},'')||''