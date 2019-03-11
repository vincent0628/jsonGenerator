$(function () {
    let oldDate = new Date(2012, 0, 1);
    let todayDate = new Date();
    let jsonFile = {};


    for (let i = 1; i <= 50; i++) {
        let seriesNoTailPad = ("000" + i);
        let seriesNoTail = seriesNoTailPad.substr(length - 4);
        let seriesNo = "complaint-".concat(seriesNoTail);

        let repairDate = randomDate(oldDate, todayDate);
        let company = (Math.random() >= 0.5) ? '流亞' : '亞磯';
        let process = (Math.random() >= 0.4) ? choose(1, 4) : choose(2, 3, 5, 6);

        let startDate = getStartDate(new Date(repairDate));
        let endDate = getEndDate(new Date(repairDate));
        let amount = getRandom(2000,50000);

        let machineNum = getRandom(1,8);
        let randomArray = getRandomArray(1, 50, machineNum);
        let machineArray = [];
        randomArray.forEach(function (item, index, array) {
            let machineNoTailPad = ("000" + randomArray[index]);
            let machineNoTail = machineNoTailPad.substr(length - 4);
            let machineNo = "machine-".concat(machineNoTail);
            machineArray.push(machineNo)
        });

        let detail = {
            'seriesNo': seriesNo,
            'complainDate': getMyDate(repairDate),
            'customerName': '紡織所雲林分部',
            "customerPhone": "055519899",
            "customerAddress": "64057 雲林縣斗六市科加路20s號",
            'company': company,
            'process': process,
        };
        let id = "" + i;
        jsonFile[id] = detail;
    }
// language=JQuery-CSS
    $("#go").text(JSON.stringify(jsonFile));
})

function getMyDate(date) {
    let yyyy = date.getFullYear();
    let MM = date.getMonth() + 1;
    let dd = date.getDate();
    let hh = date.getHours();
    let mm = date.getMinutes();
    return (yyyy + '/' + addZeroBefore(MM) + '/' + addZeroBefore(dd) + ' ' + addZeroBefore(hh) + ':' + addZeroBefore(mm));
}

function getStartDate(date) {
    let days = 10;
    let startDate = new Date(date.getTime() + days * getRandom(24 * 60 * 60 * 900, 24 * 60 * 60 * 1100));
    let yyyy = startDate.getFullYear();
    let MM = startDate.getMonth() + 1;
    let dd = startDate.getDate();
    let hh = startDate.getHours();
    let mm = startDate.getMinutes();
    return (yyyy + '/' + addZeroBefore(MM) + '/' + addZeroBefore(dd) + ' ' + addZeroBefore(hh) + ':' + addZeroBefore(mm));
}

function getEndDate(date) {
    let days = 50;
    let endDate = new Date(date.getTime() + days * getRandom(24 * 60 * 60 * 900, 24 * 60 * 60 * 1100));
    let yyyy = endDate.getFullYear();
    let MM = endDate.getMonth() + 1;
    let dd = endDate.getDate();
    let hh = endDate.getHours();
    let mm = endDate.getMinutes();
    return (yyyy + '/' + addZeroBefore(MM) + '/' + addZeroBefore(dd) + ' ' + addZeroBefore(hh) + ':' + addZeroBefore(mm));
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function addZeroBefore(n) {
    return (n < 10 ? '0' : '') + n;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArray(minNum, maxNum, n) {	//隨機產生不重覆的n個數字
    let rdmArray = [n];		//儲存產生的陣列

    for (var i = 0; i < n; i++) {
        var rdm = 0;		//暫存的亂數

        do {
            var exist = false;			//此亂數是否已存在
            rdm = getRandom(minNum, maxNum);	//取得亂數

            //檢查亂數是否存在於陣列中，若存在則繼續回圈
            if (rdmArray.indexOf(rdm) != -1) exist = true;

        } while (exist);	//產生沒出現過的亂數時離開迴圈

        rdmArray[i] = rdm;
    }
    return rdmArray;
}

function choose(a, b, c, d) {
    if (c != null && d != null) {
        return (Math.random() >= 0.5) ? choose(a, b) : choose(c, d);
    } else {
        return (Math.random() >= 0.5) ? a : b;
    }
}
