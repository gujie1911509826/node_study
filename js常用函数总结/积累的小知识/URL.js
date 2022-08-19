var str = 'http%3A%2F%2Fwww.w3school.com.cn';
var str2 = 'http://www.w3school.com.cn';


console.log(encodeURI(str2), encodeURIComponent(str2) == str);

console.log(encodeURI(str)==encodeURIComponent(str) );


