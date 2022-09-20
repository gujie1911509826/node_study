(text, row) => {
    let a = '';
    try {
        const arr = JSON.parse(text);
        if (Array.isArray(arr)) {
            const as = arr.map((obj) => { return `<a title='${obj.fileName}' download='${obj.fileName}' href='server/app/file/download?fileId=${obj.fileId}&appId=879641204305608704'>${obj.fileName.substr(0,4)}..${obj.fileName.substr(-5,5)}</a>`; })
            a = as.join('、');
        }
    } catch (e) {
        console.log('自定义代码块出错');
    }
    return a;
    $okData_266204.order_number=="其他"?okData_266204.reason1:`${okData_266204.reject_reasons}:${okData_266204.reason}`$
}

$okData_266204.order_number=="其它"?okData_266204.reason1:`${okData_266204.reject_reasons}&&${okData_266204.reason}`$
$okData_266204.order_number==-1?okData_266204.reason1:`${okData_266204.reject_reasons}&&${okData_266204.reason}`$