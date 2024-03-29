$(function () {
    $('#repair').on('click', function () {
        let data = 'repair';
        let jsonFile = print(data);
        let formattedData = JSON.stringify(jsonFile,null, 4);
        ajax('/DB/repair.json', jsonFile);
        $("#go").text(formattedData);
    });

    $('#change').on('click', function () {
        let data = 'change';
        let jsonFile = print(data);
        let formattedData = JSON.stringify(jsonFile,null, 4);
        ajax('/DB/change.json', jsonFile);
        $("#go").text(formattedData);
    });
    $('#complaint').on('click', function () {
        let data = 'complaint';
        let jsonFile = print(data);
        let formattedData = JSON.stringify(jsonFile,null, 4);
        ajax('/DB/complaint.json', jsonFile);
        $("#go").text(formattedData);

    });
    $('#tank').on('click', function () {
        let data = 'tank';
        let jsonFile = print(data);
        let formattedData = JSON.stringify(jsonFile,null, 4);
        ajax('/DB/complaint.json', jsonFile);
        $("#go").text(formattedData);
    });
    $('#machine').on('click', function () {
        let data = 'machine';
        let jsonFile = print(data);
        let formattedData = JSON.stringify(jsonFile,null, 4);
        ajax('/factory/data/machine.json', jsonFile);
        $("#go").text(formattedData);
    });
    $('#client').on('click', function () {
        let data = 'client';
        let jsonFile = print(data);
        let formattedData = JSON.stringify(jsonFile,null, 4);
        ajax('/factory/data/client.json', jsonFile);
        $("#go").text(formattedData);
    });

});


function print(data) {
    let oldDate = new Date(2015, 0, 1);
    let jsonFile = {};
    for (let i = 1; i <= 50; i++) {
        let seriesNoTailPad = ("000" + i);
        let seriesNoTail = seriesNoTailPad.substr(length - 4);

        let repairDaysRange = 30;
        let repairDate = new Date(oldDate.getTime() + repairDaysRange * getRandom(0, 24 * 60 * 60 * 1000));
        oldDate = repairDate;

        let company = (Math.random() >= 0.5) ? '流亞' : '亞磯';
        let process = (Math.random() >= 0.4) ? choose(1, 4) : choose(2, 3, 5, 6);

        let startDaysRange = 10;
        let start = new Date(repairDate.getTime() + startDaysRange * getRandom(24 * 60 * 60 * 700, 24 * 60 * 60 * 1100));
        let startDate = getDate(new Date(start));
        let StartTime = getTime(new Date(start));

        let endDaysRange = 10;
        let end = new Date(start.getTime() + endDaysRange * getRandom(24 * 60 * 60 * 700, 24 * 60 * 60 * 1100));
        let endDate = getDate(new Date(end));
        let endTime = getTime(new Date(end));

        let amount = (process === 1) ? 0 : getRandom(2000, 50000);

        let machineNum = getRandom(1, 5);
        let randomArray = getRandomArray(1, 20, machineNum);
        let machine = {};
        randomArray.forEach(function (item, index, array) {
            // let machineNoTailPad = ("000" + randomArray[index]);
            // let machineNoTail = machineNoTailPad.substr(length - 4);
            // let machineNo = "machine-".concat(machineNoTail);
            machine[item] = {comment: ""};
        });
        let id = "" + i;

        if (data === 'repair') {
            /////////////////////////////////repair/////////////////////////////
            let seriesNo = "repair-".concat(seriesNoTail);
            let repairDetail = {
                "seriesNo": seriesNo,
                "clientNo": "865309928",
                "clientName": "紡織所雲林廠",
                "repairDate": getDate(repairDate) + " " + getTime(repairDate),
                "company": company,
                "repairLevel": 1,
                "startDate": startDate,
                "startTime": StartTime,
                "endDate": endDate,
                "endTime": endTime,
                "clientTel": "05-5519899",
                "clientEmail": "ttri1234@ttri.org.tw",
                "clientAddress": "雲林縣斗六市科加路20號",
                "process": process,
                "amount": amount,
                "status": 1,
                "machine": machine
            };
            id = "" + i;
            jsonFile[id] = repairDetail;
            ////////////////////////////////////////////////////////////////////
        } else if (data === 'change') {
            /////////////////////////////////change/////////////////////////////
            let seriesNo = "change-".concat(seriesNoTail);
            let changeDetail = {
                "seriesNo": seriesNo,
                "clientNo": "865309928",
                "clientName": "紡織所雲林廠",
                "changeDate": getDate(repairDate) + " " + getTime(repairDate),
                "company": company,
                "repairLevel": 1,
                "startDate": startDate,
                "startTime": StartTime,
                "endDate": endDate,
                "endTime": endTime,
                "clientTel": "05-5519899",
                "clientEmail": "ttri1234@ttri.org.tw",
                "clientAddress": "雲林縣斗六市科加路20號",
                "process": process,
                "amount": amount,
                "status": 1,
                "machine": machine
            };
            id = "" + i;
            jsonFile[id] = changeDetail;
            ////////////////////////////////////////////////////////////////////}
        } else if (data === 'complaint') {
            /////////////////////////////////complaint//////////////////////////
            let complaintDetail = {
                "1": {
                    "seriesNo": "complaint-0001",
                    "clientNo": "865309928",
                    "clientName": "紡織所雲林廠",
                    "complaintDate": "2015/01/16 02:09",
                    "company": "流亞",
                    "repairLevel": 1,
                    "clientTel": "05-5519899",
                    "clientEmail": "ttri1234@ttri.org.tw",
                    "clientAddress": "雲林縣斗六市科加路20號",
                    "process": 1,
                    "status": 1,
                    "complaintDescription": "上禮拜才保養好，怎麼這麼快又故障了",
                    "complaintReply": "經處理，已請客戶填寫故障報修單，不計費"
                },
                "2": {
                    "seriesNo": "complaint-0002",
                    "clientNo": "865309928",
                    "clientName": "紡織所雲林廠",
                    "complaintDate": "2015/01/28 12:25",
                    "company": "亞磯",
                    "repairLevel": 1,
                    "clientTel": "05-5519899",
                    "clientEmail": "ttri1234@ttri.org.tw",
                    "clientAddress": "雲林縣斗六市科加路20號",
                    "process": 4,
                    "status": 1,
                    "complaintDescription": "這次來做機台清缸的師傅非常沒耐心，問幾個問題就翻白眼，清洗的也很不仔細，請問這個錢我還要付嗎?",
                    "complaintReply": "經處理，已派另外的技師處理，費用照付，但多算一次保養"
                },
            };
            jsonFile = complaintDetail;
            ////////////////////////////////////////////////////////////////////
        } else if (data === 'tank') {
            /////////////////////////////////tank///////////////////////////////
            let seriesNo = "tank-".concat(seriesNoTail);
            let tankDetail = {
                "seriesNo": seriesNo,
                "clientNo": "865309928",
                "clientName": "紡織所雲林廠",
                "tankDate": getDate(repairDate) + " " + getTime(repairDate),
                "company": company,
                "repairLevel": 1,
                "startDate": startDate,
                "startTime": StartTime,
                "endDate": endDate,
                "endTime": endTime,
                "clientTel": "05-5519899",
                "clientEmail": "ttri1234@ttri.org.tw",
                "clientAddress": "雲林縣斗六市科加路20號",
                "process": process,
                "amount": amount,
                "status": 1,
                "machine": machine
            };
            let id = "" + i;
            jsonFile[id] = tankDetail;
            ////////////////////////////////////////////////////////////////////
        } else if (data === 'machine') {
            /////////////////////////////////tank///////////////////////////////
            let machineDetail = {
                "1": {
                    "serialNo": "AK-DSL250",
                    "name": "AK-DSL250染色機"
                },
                "2": {
                    "serialNo": "AK-DSL500",
                    "name": "AK-DSL500染色機"
                },
                "3": {
                    "serialNo": "AK-DSL1000",
                    "name": "AK-DSL1000染色機"
                },
                "4": {
                    "serialNo": "AK-SL100",
                    "name": "AK-SL100雙液流染色機"
                },
                "5": {
                    "serialNo": "AK-SL250",
                    "name": "AK-SL250雙液流染色機"
                },
                "6": {
                    "serialNo": "AK-SL500",
                    "name": "AK-SL500雙液流染色機"
                },
                "7": {
                    "serialNo": "AK-SL1000",
                    "name": "AK-SL1000雙液流染色機"
                },
                "8": {
                    "serialNo": "AK-ISL300",
                    "name": "AK-ISL300雙液流染色機"
                },
                "9": {
                    "serialNo": "AK-ISL600",
                    "name": "AK-ISL600雙液流染色機"
                },
                "10": {
                    "serialNo": "AK-ISL1200",
                    "name": "AK-ISL1200雙液流染色機"
                },
                "11": {
                    "serialNo": "AK-REO 1T",
                    "name": "AK-REO 1T常溫染色機"
                },
                "12": {
                    "serialNo": "AK-REO 2T",
                    "name": "AK-REO 2T常溫染色機"
                },
                "13": {
                    "serialNo": "AK-REO 3T",
                    "name": "AK-REO 3T常溫染色機"
                },
                "14": {
                    "serialNo": "AK-REO 4T",
                    "name": "AK-REO 4T常溫染色機"
                },
                "15": {
                    "serialNo": "AK-REO 6T",
                    "name": "AK-REO 6T常溫染色機"
                },
                "16": {
                    "serialNo": "AK-REO 8T",
                    "name": "AK-REO 8T常溫染色機"
                },
                "17": {
                    "serialNo": "AK-QAO 250",
                    "name": "AK-QAO 250液流染色機"
                },
                "18": {
                    "serialNo": "AK-QAO 500",
                    "name": "AK-QAO 500液流染色機"
                },
                "19": {
                    "serialNo": "AK-QAO 1000",
                    "name": "AK-QAO 1000液流染色機"
                },
                "20": {
                    "serialNo": "AK-QAO 1500",
                    "name": "AK-QAO 1500液流染色機"
                }
            };
            let id = "" + i;
            jsonFile = machineDetail;
            ////////////////////////////////////////////////////////////////////
        }else if (data === 'client') {
            /////////////////////////////////tank///////////////////////////////
            let clientDetail = {
                "clientNo": "865309928",
                "clientName": "紡織所雲林廠",
                "clientTel": "05-5519899",
                "clientEmail": "ttri1234@ttri.org.tw",
                "clientAddress": "雲林縣斗六市科加路20號"
            };
            let id = "" + i;
            jsonFile = clientDetail;
            ////////////////////////////////////////////////////////////////////
        }
    }
    return jsonFile;
}

function getDate(date) {
    let yyyy = date.getFullYear();
    let MM = date.getMonth() + 1;
    let dd = date.getDate();
    return (yyyy + '/' + addZeroBefore(MM) + '/' + addZeroBefore(dd));
}

function getTime(date) {
    let hh = date.getHours();
    let mm = date.getMinutes();
    return (addZeroBefore(hh) + ':' + addZeroBefore(mm));
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

function ajax(fileName, data) {
    $.ajax({
        type: "POST",
        url: "writeFile.php",
        data: { fileName: fileName, data: data },
        success: function () {
            console.log('success');
        },
        error: function () {
            console.log('error');
        }
    });
}