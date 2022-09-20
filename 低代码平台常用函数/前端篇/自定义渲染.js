function renderFunc(text, row, index) {
    return text == '全省'
        ? '<a href="javascript:onClick="javascript:lcdpApi.selCustomFunc[\'880004091895754752\'][\'allProvinceClick\']()" >' + text + "</a>" : '<a href="javascript:;" onClick="javascript:lcdpApi.selCustomFunc[\'880004091895754752\'][\'cityClick\'](' + row.id + ')" >' + text + "</a>";
}


(text, row, index) => {
    var page_id = `${textlcdpApi?.data?.currentPageId}`;
    var fun_name = '';
    var parmas = row;
    return `<a href="javascript:onClick="javascript:lcdpApi.selCustomFunc[${page_id}][${fun_name}](${parmas})" >`
}
