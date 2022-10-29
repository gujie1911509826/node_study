(text, row) => {
    if (text != null) {
        const level = Number(row.org_id || '3');
        const width = 242 - (level - 1) * 20;
        return `<span title=${text.replace(/\s*/g, "")} style="text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: inline-block;\n  width: ${width < 0 ? 32 : width}px;\n vertical-align: middle;">${text}</span>`
    }
}


(text, row) => {
    if (text != null) {
        if (row.treelevel == '3' && row.actionImportant == 1) {
            return '<span title=' + text + '  style="text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: inline-block;\n  width: 140px;\n vertical-align: middle;"><i aria-label="图标: star" class="anticon anticon-star actIcon-left" style="color: #EC2739;margin-right: 4px"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></i>' + text + '</span>';
        } else {
            return `<span title=${text} style="text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: inline-block;\n  width: 140px;\n vertical-align: middle;">${text}</span>`

        }
    }
}



function(text, row) {
    let link = text;
    if (row.treelevel == '3') {
        if (row.output == null) {
            link = '';
        }
        else {
            return '<a href="javascript:;"onClick="javascript:lcdpApi.router(\'/dongzuomubanxiazai7644?bizId='.concat(text, "');\">查看模板</a>")
        }
    } else if (row.treelevel == '2') {
        if (row.output == null) {
            return '<a  text-decoration="none" color ="rgb(250, 158, 5)"></a>'
        }
        else {
            return '<a href="javascript:;"onClick="javascript:lcdpApi.router(\'/dongzuomubanxiazai7644copy?bizId='.concat(text, "');\">案例分享</a>")
        }
    } else {
        link = row.output;
    }
    return link;
}
