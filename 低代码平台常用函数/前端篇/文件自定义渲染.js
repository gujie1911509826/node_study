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

// 多文件渲染
function renderFunc(text, row, index) {
    let file_list = "";
    let appId = "879276722495963136";
    try {
        let arr_file = JSON.parse(text);
        if (Array.isArray(arr_file)) {
            let file_url = arr_file.map((item) => {
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

// https://lxdev.iwhalecloud.com/HJB/lcdp-app/server/app/file/download?fileId=95042&appId=896571427800190976

// $`https://lxdev.iwhalecloud.com/HJB/lcdp-app/server/app/file/download?fileId=${file?.response?.resultObject?.fileId}&appId=896571427800190976`$
// 图片下载预览
function renderFunc(text, row, index) {
    try {
        let file_id = row.file_id;
        let file_name = row.file_name;
        let appId = "896571427800190976";
        return `<div><img onclick=window.open(\`https://lxdev.iwhalecloud.com/HJB/lcdp-app/server/app/file/download?fileId=${file_id}&appId=${appId}\`) width="30px" height="30px" src='server/app/file/download?fileId=${file_id}&appId=${appId}'><a download='${file_name}'  href='server/app/file/download?fileId=${file_id}&appId=${appId}'>${'点击下载'}</a></img><div>`;
    } catch (error) {
        console.log('自定义渲染出错',error);
    }
}


// 图片预览
function renderFunc(text, row, index) {
    try {
        let file_id = row.file_id;
        let appId = "896571427800190976";
        let file_name = row.file_name;
        const aa = () => {
            console.log(111);
            window.open(`https://lxdev.iwhalecloud.com/HJB/lcdp-app/server/app/file/download?fileId=${file_id}&appId=${appId}`)
        }
        return `<img onclick=window.open(\`https://lxdev.iwhalecloud.com/HJB/lcdp-app/server/app/file/download?fileId=${file_id}&appId=${appId}\`) width="30px" height="30px" src='server/app/file/download?fileId=${file_id}&appId=${appId}'>${'点击预览'}</img>`;
    } catch (error) {
        console.log('自定义渲染出错');
    }
}


// 缩略图
function renderFunc(text, row, index) {
    try {
        let file_id = row.file_id;
        let appId = "896571427800190976";
        let file_name = row.file_name;
        return `<img onclick=window.open(\`https://lxdev.iwhalecloud.com/HJB/lcdp-app/server/app/file/download?fileId=${file_id}&appId=${appId}\`) width="30px" height="30px" src='server/app/file/download?fileId=${file_id}&appId=${appId}'></img>`;
    } catch (error) {
        console.log('自定义渲染出错');
    }
}