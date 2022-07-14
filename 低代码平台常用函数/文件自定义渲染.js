(text, row) => {
    let a = '';
    try {
        const arr = JSON.parse(text);
        if (Array.isArray(arr)) {
            const as = arr.map((obj) => { return "<a download='" + obj.fileName + "' href='server/app/file/download?fileId=" + obj.fileId + "&appId=843320827053240320" + "'>" + obj.fileName + "</a>"; })
            a = as.join('、');
        }
    } catch (e) {
        console.log('自定义代码块出错');
    }
    return a;
}