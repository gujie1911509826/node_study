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

function renderFunc(text, row, index) {
    let file_list = "";
    let appId = "879276722495963136";
    try {
        let arr_file = JSON.parse(text);
        if(Array.isArray(arr_file)){
        let file_url = arr_file.map((item)=>{
            return `<a download='${item.fileName}'  href='server/app/file/download?fileId=${item.fileId}&appId=${appId}'>${item.fileName}</a>`;
        })
        file_list = file_url.join("、");
        } 
        console.log('代码块执行完成')
    } catch (error) {
        console.log('自定义代码块出错');
    }

    return file_list;
  }