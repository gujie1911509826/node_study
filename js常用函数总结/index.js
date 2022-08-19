const newList = new Array(10).fill(1).map((item, index) => {
    return {
        time: (index + 1) * 1000,
        content: `这是第${index + 1}条信息`
    }
});
const sendlist = [];// 发送消息队列
const getMessage = (time) => {
    for (let i = 0; i < newList.length; i++) {
        const element = newList[i];
        if (element.time == time) {
            sendlist.push(element);
            newList.splice(i, 1);
        } else if (newList.length < 0) {
            break;
        }
    }
    console.log('播放进度',time)
    // console.log('循环的次数',i);
    console.log('接收的消息的长度',sendlist.length,sendlist);
    console.log('原始消息的长度', newList.length);
}
let time = 0;
setInterval(() => {
    time += 1000;
    getMessage(time);
},
    1000)
// console.log(newList);


// const arr = [3,23,12,1,1212];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if(element>5){
//         arr.splice(i,1);
//         i--;
//     }
// }
// console.log(arr);