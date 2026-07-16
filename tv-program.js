function print(data) {
    for (var program of data.list.g1) {
        console.log('--- 番組情報 ---');
        console.log('番組開始時刻: ' + program.start_time);
        console.log('番組終了時刻: ' + program.end_time);
        console.log('チャンネル: ' + program.service.name);
        console.log('番組名: ' + program.title);
        console.log('番組サブタイトル: ' + program.subtitle);
        console.log('番組説明文: ' + program.content);
        console.log('出演者: ' + program.act);
    }
}

function printDom(data) {
    var resultDiv = document.querySelector('div#result');
    resultDiv.innerHTML = '';

    if (!data || !data.list) {
        resultDiv.innerHTML = '<p>番組データが見つかりませんでした。</p>';
        return;
    }

    var table = document.createElement('table');

    var headerHtml = '<thead>' +
                        '<tr>' +
                            '<th>start_time<br>(番組開始時刻)</th>' +
                            '<th>end_time<br>(番組終了時刻)</th>' +
                            '<th>service.name<br>(チャンネル)</th>' +
                            '<th>title<br>(番組名)</th>' +
                            '<th>subtitle<br>(番組サブタイトル)</th>' +
                            '<th>content<br>(番組説明文)</th>' +
                            '<th>act<br>(出演者)</th>' +
                        '</tr>' +
                     '</thead>';

    var bodyHtml = '';

    var serviceSelect = document.querySelector('select#service');
    var selectedService = serviceSelect.value;
    var programList = data.list[selectedService];

    if (programList) {
        for (var program of programList) {
            bodyHtml = bodyHtml + '<tr>' +
                       '<td>' + program.start_time + '</td>' +
                       '<td>' + program.end_time + '</td>' +
                       '<td>' + program.service.name + '</td>' +
                       '<td>' + program.title + '</td>' +
                       '<td>' + program.subtitle + '</td>' +
                       '<td>' + program.content + '</td>' +
                       '<td>' + program.act + '</td>' +
                       '</tr>';
        }
    }

    table.innerHTML = headerHtml + '<tbody>' + bodyHtml + '</tbody>';
    resultDiv.insertAdjacentElement('beforeend', table);
}

var btn = document.querySelector('#submitButton');
btn.addEventListener('click', sendRequest);

function sendRequest() {
    var serviceSelect = document.querySelector('select#service');
    var genreSelect = document.querySelector('select#genre');
    
    var serviceValue = serviceSelect.value;
    var genreValue = genreSelect.value;

    var url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/' + serviceValue + '-' + genreValue + '-j.json';

    axios.get(url)
        .then(showResult)
        .catch(showError)
        .then(finish);
}

function showResult(resp) {
    var data = resp.data;

    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    if (data === null || data === undefined) {
        console.log('データが空です');
        return;
    }

    printDom(data);
}

function showError(err) {
    console.log(err);
}

function finish() {
    console.log('Ajax 通信が終わりました');
}