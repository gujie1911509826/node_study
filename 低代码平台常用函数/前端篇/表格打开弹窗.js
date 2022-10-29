function renderFunc(text, row, index) {
    return '<a href="javascript:;"onClick="javascript:lcdpApi.router(\'/zuzhijiagou123?bizId='.concat(row.org_id, "');\">")
        .concat("详情", "</a>")
}


function renderFunc(text, row, index) {
    const bizId = row.org_id;
    const sceneCode = 'V';
    const redirectPage = `/zuzhijiagou123?bizId=${bizId}&sceneCode=${sceneCode}`;
    return text ? `
          <a
            href="javascript:;"
            onClick="javascript:lcdpApi.router("${redirectPage}")"
          >
            ${text}
          </a>
        ` : "";
}

function renderFunc(text, row, index) {
    const bizId = row.org_id;
    const sceneCode = 'V';
    const redirectPage = `/zuzhijiagou123?bizId=${bizId}&sceneCode=${sceneCode}`;
    return `<a
            href="javascript:;"
            onClick="javascript:lcdpApi.router(\'${redirectPage}\')"
          >
            ${'详情'}
          </a>`;
}